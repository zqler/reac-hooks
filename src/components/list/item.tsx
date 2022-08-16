
interface style{
  color: string,
}
interface IProps{
  name: string,
  age: number,
  sex: '男'|'女',
  style: any,
  styles?: style,
}
function Item(props:IProps){
  return <div className={props.style} style={props.styles}>
        <div className="ui-item">{props.name}</div>
        <div className="ui-item">{props.age}</div>
        <div className="ui-item">{props.sex}</div>
    </div>
}
Item.displayName ="Item"
export {Item}