import React, { createContext, ReactElement, useMemo, useState } from 'react'

interface ContextProps {
  headerItem?: ReactElement
  setHeaderItem: (newHeaderMiddleItem: ReactElement) => void
}

export const HeaderContext = createContext<ContextProps>({
  headerItem: <>HeaderMiddle</>,
  setHeaderItem: () => {}
})

interface Props {
  children?: React.ReactNode
}

const HeaderProvider: React.FC<Props> = ({ children }) => {
  const [headerMiddleItem, setHeaderMiddleItem] = useState<ReactElement>(<>MiddleItem</>)

  const setNewHeaderMiddleItem = (newHeaderMiddleItem: ReactElement) => {
    setHeaderMiddleItem(newHeaderMiddleItem)
  }

  const contextValue = useMemo(
    () => ({
      headerItem: headerMiddleItem,
      setHeaderItem: setNewHeaderMiddleItem
    }),
    [headerMiddleItem]
  )

  return <HeaderContext.Provider value={contextValue}>{children}</HeaderContext.Provider>
}

export default HeaderProvider
