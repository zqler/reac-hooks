 
 interface IProps{
   children: React.ReactNode,
   name?: string,
   label?: string,
 }
const TabItem = ({ children }:IProps) => {
  return <div>{children}</div>
}
TabItem.displayName = 'tabItem'
export {TabItem}