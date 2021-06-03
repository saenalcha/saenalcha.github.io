import fs from 'fs'
import matter from 'gray-matter'
import { v4 as uuid } from 'uuid'

import React from 'react'
import Link from 'next/link'


import styles from "../styles/Home.module.css";

import tdd from '../components/tddExample'

tdd();

function Home(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Blog!</a>
        </h1>
        <ul>
          {props.blogs.map((blog, idx) => {
            return (
              <li key={blog.id}>
                <Link href={`/blog/${blog.slug}`}>
                <a>{blog.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
      <footer className={styles.footer}>
        blog by saenal
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/posts`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/posts/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });

      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

  // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { blogs },
  };
}
export default Home
