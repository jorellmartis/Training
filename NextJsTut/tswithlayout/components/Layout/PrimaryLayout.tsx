import React, { ReactElement } from 'react'

const PrimaryLayout = ({ children }: { children: ReactElement}) => {
  return (
    <>
    <nav><h1>My nav with PrimaryLayout</h1></nav>
    <main>
    {children}
    </main>
    </>
  )
}

export default PrimaryLayout