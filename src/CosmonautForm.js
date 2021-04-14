import React, { Component } from 'react'

class CosmonautForm extends Component {
    constructor(props) {
        super(props)
        this.state = this.emptyFormState

        this.handleAddCosmonautChange = this.handleAddCosmonautChange.bind(this)
        this.onCosmonautFormSubmit = this.onCosmonautFormSubmit.bind(this)
    }


    emptyFormState = {
        name: '',
        surname: '',
        birth: '',
        superpower: '',
    }


    onCosmonautFormSubmit = () => {
        this.props.handleCosmonautFormSubmit(this.state)
        this.setState(this.emptyFormState)
    }


    handleAddCosmonautChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }


    render() {
        const {name, surname, birth, superpower} = this.state

        return (
            <div className="cosmonautFormDiv">Add Cosmonaut
                <form>
                    <label htmlFor="name">Name
                        <input type="text" name="name" id="name" value={name} onChange={this.handleAddCosmonautChange} ></input>
                    </label>
                    <br/>
                    <label htmlFor="surame">Surame
                        <input type="text" name="surname" id="surname" value={surname} onChange={this.handleAddCosmonautChange} ></input>
                    </label>
                    <br/>
                    <label htmlFor="birth">Date of birth
                        <input type="date" name="birth" id="birth" value={birth} onChange={this.handleAddCosmonautChange} ></input>
                    </label>
                    <br/>
                    <label htmlFor="superpower">Superpower
                        <input type="text" name="superpower" id="superpower" value={superpower} onChange={this.handleAddCosmonautChange} ></input>
                    </label>
                    <br />
                    <input type="button" value="Add cosmonaut" onClick={this.onCosmonautFormSubmit}/>
                </form>
            </div>
        )
    }
}

export default CosmonautForm