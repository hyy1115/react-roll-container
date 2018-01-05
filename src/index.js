'use strict';
import React from 'react'
import JRoll from 'jroll'
export default class MyJRoll extends React.Component {
    constructor(props) {
        super(props)
        this.jroll = null
    }
    componentDidMount() {
        let wrappers = this.props.ID || 'wrappers'
        this.jroll = new JRoll(`#${wrappers}`)
        this.jroll.refresh()
        this.jroll.on('scrollEnd', () => {
            this.jroll.refresh()
        })
    }
    componentDidUpdate() {
        setTimeout(() =>  {
            if (!!this.jroll) {
                this.jroll.refresh()
            }
        }, 400)
    }
    componentWillUnmount() {
        this.jroll.destroy()
    }
    render() {
        const { height, maxHeight, bgColor } = this.props
        let _style
        if (!maxHeight) {
            _style = {height: height ? height : '100%', background: bgColor ? bgColor : '#f6f6f6'}
        } else {
            _style = {maxHeight: maxHeight, background: bgColor ? bgColor : '#f6f6f6'}
        }
        return (
            <div
                id={this.props.ID ? this.props.ID : 'wrappers'}
                style={_style}
            >
                <ul
                    className="clearfix"
                    id="scroller"
                >
                    {this.props.children}
                </ul>
            </div>
        )
    }
}