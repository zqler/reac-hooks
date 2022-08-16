import React, { isValidElement, ReactElement } from "react"


interface IProps{
  children?: any
}
function Group(props:IProps){
  const newChildren: any = []
  React.Children.forEach(props.children,(item)=>{
      const { type ,props } = item 
      if(isValidElement(item) && type.displayName === 'Item' ){
          // newChildren.push(item)
          interface style{
            color: string
          }
          const styles:style={
             color: "red",
          }
          newChildren.push(
             React.cloneElement(item,{styles,...props}
            ))
      }
  })
  return  newChildren
}
export {Group}