# react-roll-container

采用比IScroll更加轻量的JRoll封装的React组件，可以作为移动端DOM内部CSS3滚动的组件。

常用在以下地方：

1、弹框内部的滚动

2、多列表的滚动

3、类似京东app垂直固定导航的滚动

4、其他可能的场景

### 安装

```npm
npm i --save react-roll-container
```

### 用法

1、整个页面采用CSS3垂直滚动
```javascript
import MyJRoll from 'react-roll-container'

class Component extends React.Component {
    state = {
        height: '100vh'
    }
    render() {
        const { height } = this.state
        return (
            <MyJRoll height={height + 'px'}>
                {/*子组件*/}
            </MyJRoll>
        )
    }
}
```

2、组件内部的子组件采用CSS3垂直滚动
```javascript
import MyJRoll from 'react-roll-container'

class Component extends React.Component {
    state = {
        height: 0
    }
    componentDidMount() {
        this.getScrollHeight()
    }
    getScrollHeight = () => {
        //主要是求出滚动区域的实际高度，如果已知实际高度是个固定值，则不需要设置state
        //如果实际高度需要根据一些特定的加减法求出来的，则通过state设置
        
        //例如：
        const header = document.querySelector('.header')
        this.setState(() => ({height: getClientHeight - header.offsetHeight}))
    }
    render() {
        const { height } = this.state
        return (
            <div>
                <Header>
                    头部信息
                </Header>
                <MyJRoll height={height + 'px'}>
                    <NavList />         
                </MyJRoll>
            </div>
        )
    }
}
```
3、弹框组件采用CSS3垂直滚动
我们知道，在移动端做弹框内部的滚动的时候，会有点击穿透问题，如果采用MyJRoll组件来包装弹框，则不会有这个问题

4、更多使用场景需自行发现

### 可配置信息

height：这个是最重要的配置，因为浏览器需要知道你的滚动区域的实际高度，有时候js执行后计算高度不准确，可能是因为你的DOM还没有渲染完成，就像使用JQuery的时候要reader才能保证安全

maxHeight：通常你不需要管它

bgColor：用来设置滚动区域的背景色，默认是 '#f6f6f6'