import React, { ReactElement } from 'react'

const LayoutMain = ({ children }: { children: ReactElement}) => {
  return (
    <>
    <nav><h1>My nav with layoutMain</h1></nav>
    <main>
    {children}
    </main>
    </>
  )
}

export default LayoutMain