import * as React from 'react';
import ReactDOM from "react-dom"
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');
interface IProps{
    getContainer: any
}
export default class Portals extends React.Component<IProps> {
    el: HTMLDivElement;
    constructor(props: IProps | Readonly<IProps>) {
        super(props);
        this.el = document.createElement('div');
      }
    componentDidMount() {
        // 在 Modal 的所有子元素被挂载后，
        // 这个 portal 元素会被嵌入到 DOM 树中，
        // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
        // 如果要求子组件在挂载时可以立刻接入 DOM 树，
        // 例如衡量一个 DOM 节点，
        // 或者在后代节点中使用 ‘autoFocus’，
        // 则需添加 state 到 Modal 中，
        // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
        modalRoot.appendChild(this.el);
      }
    
    componentWillUnmount() {
        modalRoot.removeChild(this.el);
      }
    render() {
      const {  getContainer } = this.props;
      if (!getContainer)  {
        return null;
      }
    return ReactDOM.createPortal(
        this.props.children,
        this.el
        );
    }
  }