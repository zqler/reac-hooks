// Modal.tsx
import * as React from 'react';
import './modal.less';
interface IModalProps {
  children: React.ReactChild | React.ReactChildren |  React.ReactElement<any>[],
  title?: React.ReactChild,
  visible: boolean,
  onOk?: () => void,
  onCancel?: () => void,
  okText?: string,
  cancelText?: string,
} 
export default class Modal extends React.Component<IModalProps> {
  public static defaultProps = {
    cancelText: '取消',
    okText: '确定',
    visible: false,
  }
   render() {
    const { title, visible, okText, cancelText, children, onOk, onCancel } = this.props;
    if (!visible)  {
      return null;
    }
    return (
      <div>
        <div className="modal-mask" onClick={onCancel}/>
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-title">{title}</div>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button className="modal-cancel-btn btn" onClick={onCancel}>{cancelText}</button>
            <button className="modal-confirm-btn btn" onClick={onOk}>{okText}</button>
          </div>
        </div>
      </div>
    )
  }
}