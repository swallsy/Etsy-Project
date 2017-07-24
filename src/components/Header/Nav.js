import React, { Component } from 'react';
import '../../styles/Nav.css';

export default class Nav extends Component {
    constructor(props){
        super(props)

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)

        this.state = {
            render: null
        }
    }

    handleMouseEnter(event) {
        this.setState({})
        {/*currently thinking about trying to set each dropdown as state. this.setState({render: function(){return(<ul> <li>All Jewelry</li> </ul>)})*/}
    }

    handleMouseLeave(event) {
        console.log(event);
        this.setState({isVisible: false})
    }

    render() {
        return (

            {/*<ul>
                <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >Clothing & Accessories
                    <ul className={(this.state.isVisible ? " show": "dropdown-box")}>
                        <li>Accessories
                            <ul>
                                <li>Belts & Suspenders</li>
                                <li>Gloves & Mittens</li>
                                <li>Hair accessories
                                    <ul>
                                        <li>Fascinators & Mini Hats</li>
                                        <li>Headbans</li>
                                        <li>Ties & Elastics</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>Bags & Purses
                            <ul>
                                <li>Test items</li>
                                <li>More test items</li>
                                <li>Some bullshit</li>
                            </ul>
                        </li>

                        <li>Clothing
                            <ul>
                                <li>Test items</li>
                                <li>More test items</li>
                                <li>Some bullshit</li>
                            </ul>
                        </li>

                        <li>Shoes
                            <ul>
                                <li>Test items</li>
                                <li>More test items</li>
                                <li>Some bullshit</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >Jewelry
                    <ul className="dropdown-box">
                        <li>Subcategory 1
                            <ul>
                                <li>LI 1</li>
                                <li>LI 2</li>
                                <li>LI 3</li>
                            </ul>
                        </li>
                        <li>Subcategory 2
                            <ul>
                                <li>LI 1</li>
                                <li>LI 2</li>
                                <li>LI 3</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul> */}
        )
    }

}
