import React from 'react'

const Container = ({ children, classNameLists }) => {
  return (
    <div className={`max-w-6xl px-4 lg:px-0 mx-auto ${classNameLists}`}>
      {children}
    </div>
  )
}

export default Container
