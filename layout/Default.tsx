import React from 'react'
import Link from 'next/link'

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <Link href='/'>
          <a style={{marginRight: '4px'}}>
            home
          </a>
        </Link>
        <Link href='/about'>
          about
        </Link>
      </nav>
      {children}
    </div>
  )
}

export { DefaultLayout }