import React, { Component } from 'react';
import '../../styles/Nav.css';

export default class Nav extends Component {
    constructor(props){
        super(props)

        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)

        this.state = {
            isVisible: false
        }
    }

    handleMouseEnter(event) {
        event.target.children[0].className = "dropdown-box show"
    }

    handleMouseLeave(event) {
        event.target.children[0].className = "dropdown-box"
    }

    render() {
        return (
            <ul>
                <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >Clothing & Accessories
                    <ul className="dropdown-box">
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


                <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >Craft Supplies & Tools
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



                <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >Weddings
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


                <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >Entertainment
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


                <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >Home & Living
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

                <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >Kids & Baby
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

                <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >Vintage
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
            </ul>
        )
    }

}
