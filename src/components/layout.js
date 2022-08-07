import * as React from "react"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  return (
    <>
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <main>{children}</main>
    </div>
        <footer>
          Amici di Montaldo - Via Villa 6, 15020 Montaldo di Cerrina Monferrato (AL) 
        </footer></>
  )
}

export default Layout
