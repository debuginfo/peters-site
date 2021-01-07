import React from "react";


export default class PageLayout extends React.Component {
    render() {
        return (
            <div className="__layout">
                <div className="__layout-tmp">
                { this.props.children }
                </div>
            </div>
        )
    }
}