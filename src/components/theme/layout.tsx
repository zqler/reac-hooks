import { ThemeContext,theme,bookInfo } from "./context"
import { ChildContext } from "./child"
interface IProps{
  themeId?: "dark" | "blue",
}
export const  LayoutContext=(props:IProps)=>{
  const themes = theme[props.themeId] || theme['dark'];
  return <ThemeContext.Provider value={{theme:themes ,bookInfo}} >
      <ChildContext />
  </ThemeContext.Provider>
}

