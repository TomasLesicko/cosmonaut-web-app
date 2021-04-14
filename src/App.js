import React, { Component } from 'react'
import './App.css';
import CosmonautTable from './CosmonautTable'
import CosmonautForm from './CosmonautForm';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cosmonauts: []
        }
    }


    render() {
        return (
            <div className="App">
                <CosmonautForm />
                <CosmonautTable />
            </div>
        )
    }
}

export default App;
