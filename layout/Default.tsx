import React from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import Head from "next/head";
import styled from '@emotion/styled'

const DefaultLayout = ({ children }) => {
  const router = useRouter()
  const m2 = {
    margin: '24px'
  }
  const Layout = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0.5rem;
  `
  const Nav = styled.nav`
    ${m2}
  `
  const Container = styled.div`
    ${m2}
  `
  const Linker = ({ href, name }) => {
    const Anchor = styled.a`
      margin-right: 8px;
      cursor: pointer;
      color: ${router.pathname === href ? '#0070f3' : 'inherit'};
    `
    return (
      <Link href={href}>
        <Anchor>{name}</Anchor>
      </Link>
    )
  }

  return (
    <Layout>
      <Head>
        <title>saenal cha. tech blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav>
        <Linker
          name={"home"}
          href={"/"}
        />
        <Linker
          name={"about"}
          href={"/about"}
        />
        <Linker
          name={"posts"}
          href={"/posts"}
        />
      </Nav>
      <Container>
        {children}
      </Container>
    </Layout>
  );
};

export { DefaultLayout };
