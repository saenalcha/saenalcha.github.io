import React from "react";
import html from "remark-html"
import fs from "fs"
import highlight from "remark-highlight.js"
import 'highlight.js/styles/atom-one-dark.css';
import unified from "unified"
import markdown from "remark-parse"
import matter from "gray-matter"

function BlogPostPage(props) {
  return (
    <div>
      <h1>{props.blog.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: props.blog.content }}></section>
    </div>
  );
}

// pass props to BlogPostPage component
export async function getStaticProps(context) {
  const slug = context.params.slug; // get slug from params
  const path = `${process.cwd()}/posts/${slug}.md`;

  // read file content and store into rawContent variable
  const rawContent = fs.readFileSync(path, {
    encoding: "utf-8",
  });

  const { data, content } = matter(rawContent); // pass rawContent to gray-matter to get data and content

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(html)
    .process(content); // pass content to process

  return {
    props: {
      blog: {
        ...data,
        content: result.toString(),
      }
    },
  };
}

// generate HTML paths at build time
export async function getStaticPaths(context) {
  const path = `${process.cwd()}/posts`;
  const files = fs.readdirSync(path, "utf-8");

  const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""));

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;
