import React from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import styled from '@emotion/styled'

const DefaultLayout = ({ children }) => {
  const router = useRouter()

  const Nav = styled.nav`
    margin: 20px;
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
    <div>
      <Nav>
        <Linker
          name={"home"}
          href={"/"}
        />
        <Linker
          name={"about"}
          href={"/about"}
        />
      </Nav>
      {children}
    </div>
  );
};

export { DefaultLayout };
