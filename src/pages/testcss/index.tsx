
/**
 * title: Default usage
 * desc: sets title of the page.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 设置页面标题
 */

 import React from 'react';
 import useTitle from '../../components/useTitle';
 import "./index.css"
 export default ()=> {
    useTitle('双飞翼布局');
    const list=[1,2,3];
    return (
        <div>
            <div id="container" className="column  container">
            <div id="center" className='center'>1111</div>
           </div>  
            <div id="left" className="column left">222</div>
            <div id="right" className="column right">333</div>
            {
                list.map(ele=>{
                    return <div key={ele}>{ele}</div>
                })
            }
        </div>
    ); 
  };
