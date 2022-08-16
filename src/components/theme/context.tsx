import React from "react";
interface Theme{
  blue: any,
  dark: any
}
export const theme:Theme ={
    blue: {
      background:'#fff',
      color: '#333'
    },
    dark: {
      background:'#333',
      color: '#fff'
    }
}
export const bookInfo ={
  name:'这是react context组件的写法',
  author:'zqler',
  sex:'男'
}
//建立一个Context,并且赋予初始值
export const ThemeContext: React.Context<any> = React.createContext({theme: theme['dark'],bookInfo:null});

