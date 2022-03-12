import React from 'react'

import styles from './Columns.module.css'

const Context = React.createContext({
  space: 0,
})

export const useColumns = () => React.useContext(Context)

const Columns = props => {
  const {
    children,
    space,
    marginBottom = 0,
    padding = 0,
    paddingX,
    paddingY,
    alignX = 'flex-start',
  } = props

  return (
    <Context.Provider value={{ space }}>
      <div
        className={styles.columns}
        style={{
          marginLeft: `${-space}rem`,
          marginBottom: `${marginBottom}rem`,
          justifyContent: alignX,
          padding: `${paddingY || padding}rem ${paddingX || padding}rem`,
        }}
      >
        {children}
      </div>
    </Context.Provider>
  )
}

export default Columns
