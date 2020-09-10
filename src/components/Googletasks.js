import React, { Component } from 'react'
import Nav from './Nav';
import Navmodal from './Navmodal';

export class Googletasks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isModalOpened : false
        }
    }
    handleModalOpen = ()=>{
        this.setState({
            isModalOpened : !this.state.isModalOpened
        })
    }
    
    render() {
        return (
            <div>
                <Nav handleModalOpen={this.handleModalOpen}/>
                <Navmodal isModalOpened={this.state.isModalOpened} handleModalOpen={this.handleModalOpen}/>
            </div>
        )
    }
}

export default Googletasks
