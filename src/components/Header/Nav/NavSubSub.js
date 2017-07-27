import React, { Component } from 'react';
import navBarData from './NavBarData.js'

export default class NavSubSub extends Component {
    render() {
        let sub = this.props.dataLoc

        let subSubDrop;
        if(sub.name === this.props.hoveredSub) {
            subSubDrop = sub.sub_sub_categories.map(sub_sub => {
                return (
                    <li key={sub_sub.name} className="sub-sub-li"><a href={sub_sub.link}>
                        {sub_sub.name}
                    </a></li>
                )
            })
        }
        else {
            subSubDrop = (
                <li key={sub_sub.name} className="sub-sub-li"><a href={sub.sub_sub_categories[0].link}>
                    {sub.sub_sub_categories[0].name}
                </a></li>
            )
        }
        return(
            <div>
                {subSubDrop}
            </div>
        )
    }
}
