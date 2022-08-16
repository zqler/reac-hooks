### state props
### 提供者模式

const ThemeContext = React.createContext(null) // 创建一个 context 上下文 ,主题颜色Context

function ConsumerDemo(){
    return <div>
         <ThemeContext.Consumer>
        {
            (theme) => <div style={{ ...theme}} >
                  <p>学习react主题切换</p>
                  <p> react context 使用</p>
             </div>
        }
        </ThemeContext.Consumer>
    </div>
}

class Index extends React.PureComponent{
    render(){
        return <div>
            <ConsumerDemo />
        </div>
    }
}

export default function ProviderDemo(){
    const [ theme , setTheme ]= useState({ color:'pink' , background:'#ff5100' })
    return <div>
       <ThemeContext.Provider value={theme}  >
          <Index  />
       </ThemeContext.Provider>
       <button onClick={()=>setTheme({ color:'blue' , background:'#000'  })} >点击</button>
    </div>
}
