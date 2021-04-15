import React, { Component } from 'react'
import './App.css';
import cosmonauts from './cosmonauts'
import CosmonautTable from './CosmonautTable'
import CosmonautForm from './CosmonautForm'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cosmonauts: cosmonauts,
        }

        this.handleCosmonautFormSubmit = this.handleCosmonautFormSubmit.bind(this)
        this.removeCosmonaut = this.removeCosmonaut.bind(this)
    }


    handleCosmonautFormSubmit = (cosmonaut) => {
        this.setState({
            cosmonauts: [...this.state.cosmonauts, cosmonaut]
        })
    }


    removeCosmonaut = (index) => {
        this.setState(currentState => ({
            cosmonauts: currentState.cosmonauts.filter((cosmonaut, i) => {
                return i !== index
            })
        }))
    }


    render() {
        return (
            <div className="app">
                <CosmonautForm handleCosmonautFormSubmit={this.handleCosmonautFormSubmit} />
                <CosmonautTable cosmonauts={this.state.cosmonauts} removeCosmonaut={this.removeCosmonaut} />
            </div>
        )
    }
}

export default App;
