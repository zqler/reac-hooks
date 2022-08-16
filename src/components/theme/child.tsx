import {ThemeContext} from "./context"

export const  ChildContext =()=>{
  return <ThemeContext.Consumer>
         {({theme,bookInfo})=><div style={theme}>
             名称：{bookInfo.name}
             作者：{bookInfo.author}
             性别：{bookInfo.author}
         </div>}
       </ThemeContext.Consumer>
}
