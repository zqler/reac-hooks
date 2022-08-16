
/**
 * title: Default usage
 * desc: sets title of the page.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 设置页面标题
 */

 import React from 'react';
 import useTitle from '../../components/useTitle';
  export default ()=> {
    useTitle('登录');
    return (
      <div>
        这是系统的登录界面
      </div>
    );
  };
