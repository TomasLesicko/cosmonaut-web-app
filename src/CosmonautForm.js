import React, { Component } from 'react'

class CosmonautForm extends Component {
    render() {
        return (
            <div>Add Cosmonaut
                <form>
                    <label htmlFor="cosmonautName">Name
                        <input type="text" id="cosmonautName"></input>
                    </label>
                    <br/>
                    <label htmlFor="cosmonautSurame">Surame
                        <input type="text" id="cosmonautSurname"></input>
                    </label>
                    <br/>
                    <label htmlFor="cosmonautBirth">Date of birth
                        <input type="date" id="cosmonautBirth"></input>
                    </label>
                    <br/>
                    <label htmlFor="cosmonautSuperpower">Superpower
                        <input type="text" id="cosmonautSuperpower"></input>
                    </label>
                    <br/>
                </form>
            </div>
        )
    }
}

export default CosmonautForm