// 如上，有三个子组件，ComponentA ，ComponentB，ComponentC，现在期望执行顺序是 ComponentA 渲染完成，挂载 ComponentB ，ComponentB 渲染完成，挂载 ComponentC，也就是三个组件是按照先后顺序渲染挂载的，那么如何实现呢？

import React from "react";
import {useEffect,Component } from "react";
interface IState{
  isRender: boolean
}
interface IProps{
  children?: string
}

export function createHoc(){
  const renderQueue: (() => void)[]=[];//等待渲染队列
  return function Hoc(Component: React.ComponentType<any>){ //闭包
    function RenderController(props: { [x: string]: any; renderNextComponent: any;}){ //用于挂载真正的组件
      const { renderNextComponent ,...otherprops  } = props
      useEffect(()=>{
          renderNextComponent() /* 通知执行下一个需要挂载的组件任务 */
      },[])
      return <Component  {...otherprops}  /> 
    }
    return class Wrap extends React.Component<IProps,IState>{
      constructor(props:IProps){
          super(props)
          this.state={
            isRender: true
          }
          const tryRender = ()=>{
              this.setState({
                  isRender:true
              })
          }
          if(renderQueue.length === 0) this.isFirstRender = true
          renderQueue.push(tryRender)
      }
      isFirstRender = false      /* 是否是队列中的第一个挂载任务 */
      renderNextComponent=()=>{  /* 从更新队列中，取出下一个任务，进行挂载 */
          if(renderQueue.length > 0 ){
              console.log('挂载下一个组件')
              const nextRender = renderQueue.shift()
              nextRender()
          }
      }
      componentDidMount(){  /* 如果是第一个挂载任务，那么需要 */
          this.isFirstRender && this.renderNextComponent()
      }
      render(){
          const { isRender } = this.state
          return isRender ? <RenderController  {...this.props} renderNextComponent={this.renderNextComponent}/> : <div>加载中</div>
      }
    }
  }
}
