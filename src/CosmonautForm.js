import React, { Component } from 'react'
import FormErrors from './FormErrors'

class CosmonautForm extends Component {
    constructor(props) {
        super(props)
        this.state = this.emptyFormState

        this.handleAddCosmonautChange = this.handleAddCosmonautChange.bind(this)
        this.onCosmonautFormSubmit = this.onCosmonautFormSubmit.bind(this)
        this.validateField = this.validateField.bind(this)
        this.validateForm = this.validateForm.bind(this)
        this.submit = this.submit.bind(this)
    }


    emptyFormState = {
        name: '',
        nameValid: false,

        surname: '',
        surnameValid: false,

        birth: '',
        birthValid: false,

        superpower: '',

        formValid: false,
        formErrors: {
            name: '',
            surname: '',
            birth: '',
        }
    }


    onCosmonautFormSubmit = () => {
        this.props.handleCosmonautFormSubmit(this.state)
        this.setState(this.emptyFormState)
        //this.submit() no POST on mockend
    }


    handleAddCosmonautChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        }, () => { this.validateField(name, value) })
    }


    validateField = (name, value) => {
        let formErrors = this.state.formErrors
        let nameValid = this.state.nameValid
        let surnameValid = this.state.surnameValid
        let birthValid = this.state.birthValid

        switch (name) {
            case 'name':
                nameValid = value.match(/^[a-z ]+$/i) !== null
                formErrors[name] = nameValid ? '' : `${name} cannot be empty or contain numbers or special characters`
                break
            case 'surname':
                surnameValid = value.match(/^[a-z ]+$/i) !== null
                formErrors[name] = surnameValid ? '' : `${name} cannot be empty or contain numbers or special characters`
                break
            case 'birth':
                birthValid = new Date(this.state.birth).getTime() <= new Date().getTime()
                formErrors[name] = birthValid ? '' : `${name} cannot be set in the future`
                break
            default:
        }

        this.setState({
            nameValid: nameValid,
            surnameValid: surnameValid,
            birthValid: birthValid,
        }, this.validateForm);
    }


    validateForm = () => {
        this.setState({ formValid: this.state.nameValid && this.state.surnameValid && this.state.birthValid })
    }


    submit = () => {
        const { name, surname, birth, superpower } = this.state
        fetch('/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                surname: surname,
                birth: birth,
                superpower: superpower,
            }),
        })
    }


    render() {
        const { name, surname, birth, superpower } = this.state

        return (
            <div className="form-cosmonaut-div"> Add a new cosmonaut
                <form className="form-add-cosmonaut">
                    <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={this.handleAddCosmonautChange} ></input>
                    <label htmlFor="surame">Surame</label>
                        <input type="text" name="surname" id="surname" value={surname} onChange={this.handleAddCosmonautChange} ></input>
                    <label htmlFor="birth">Date of birth</label>
                        <input type="date" name="birth" id="birth" value={birth} onChange={this.handleAddCosmonautChange} ></input>
                    <label htmlFor="superpower">Superpower</label>
                    <input type="text" name="superpower" id="superpower" value={superpower} onChange={this.handleAddCosmonautChange} ></input>
                    <button type="submit" value="Add cosmonaut" disabled={!this.state.formValid} onClick={this.onCosmonautFormSubmit} >Add cosmonaut</button>
                </form>
                <FormErrors errors={this.state.formErrors} />
            </div>
        )
    }
}

export default CosmonautForm