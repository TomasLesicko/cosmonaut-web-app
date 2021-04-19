import React, { Component } from 'react'
import './App.css';
import CosmonautTable from './CosmonautTable'
import CosmonautForm from './CosmonautForm'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cosmonauts: [],
        }

        this.handleCosmonautFormSubmit = this.handleCosmonautFormSubmit.bind(this)
        this.removeCosmonaut = this.removeCosmonaut.bind(this)
    }


    handleCosmonautFormSubmit = (cosmonaut) => {
        this.setState({
            cosmonauts: [...this.state.cosmonauts, cosmonaut]
        })
    }


    componentDidMount() {
        fetch('https://mockend.com/TomasLesicko/cosmonaut-web-app/cosmonauts')
            .then((res) => res.json())
            .then((data) => {

                this.setState({
                    cosmonauts: data.map((cosmonaut) => {
                        return {
                            name: cosmonaut.name,
                            surname: cosmonaut.surname,
                            birth: this.formatDate(cosmonaut.birth),
                            superpower: cosmonaut.superpower,
                        }
                    })
                })
            })
            .catch((error) => (console.log(error)))
    }


    formatDate(dateString) {
        const date = new Date(dateString)
        const result = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

        return result
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
