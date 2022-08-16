
import { useEffect, useState } from "react";
import {createHoc} from "../../components/hoc/createHoc"
/* 创建 hoc  */
const loadingHoc = createHoc();
function CompA(){
  useEffect(()=>{
      console.log('组件A挂载完成')
  },[])
  return <div>组件 A </div>
}
function CompB(){
  useEffect(()=>{
      console.log('组件B挂载完成')
  },[])
  return <div>组件 B </div>
}
function CompC(){
  useEffect(()=>{
      console.log('组件C挂载完成')
  },[])
  return  <div>组件 C </div>
}

function CompD(){
  useEffect(()=>{
      console.log('组件D挂载完成')
  },[])
  return  <div>组件 D </div>
}
function CompE(){
  useEffect(()=>{
      console.log('组件E挂载完成')
  },[])
  return  <div>组件 E </div>
}

const ComponentA = loadingHoc(CompA)
const ComponentB = loadingHoc(CompB)
const ComponentC = loadingHoc(CompC)
const ComponentD = loadingHoc(CompD)
const ComponentE = loadingHoc(CompE)

export default function List(){
    const [isShow, setIsShow] = useState(false)
    return <div>
        <ComponentA />
        <ComponentB/>
        <ComponentC />
        {isShow && <ComponentD />}
        {isShow && <ComponentE />}
        <button onClick={()=> setIsShow(true)} > 挂载组件D ，E </button>
    </div>
}




