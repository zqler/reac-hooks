
/**
 * title: Default usage
 * desc: sets title of the page.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 设置页面标题
 */

 import React from 'react';
 import useTitle from '../../components/useTitle';
 import { Group,Item } from 'src/components/list';
 import {Tab,TabItem} from "../../components/tab";
 import LayoutContext  from '../../components/theme';
  export default ()=> {
    useTitle('首页');
    return (
      <div>
        <p>首页测试，你是一个菜鸟，你要努力</p>
        <Group>
           <Item name={'zq'} age={30} sex={'男'} style={"box"} key={"abc"}></Item>
           <Item name={'xer'} age={27} sex={'女'} style={"box"} key={"123"}></Item>
           <div >我是你爸爸</div>
        </Group>
        <Tab>
           <TabItem name={"zq"} label={"测试"}>新的页面</TabItem>
        </Tab>
        <LayoutContext themeId={'blue'}></LayoutContext>
      </div>
    );
  };
