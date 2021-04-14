import React, { Component } from 'react'

const CosmonautTableBody = (props) => {
    return (
        <tbody>
            <tr>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>
                    <button className="button-edit" type="button">Edit</button>
                    <button className="button-delete" type="button">Delete</button>
                </td>
            </tr>
        </tbody>
    )
}


const CosmonautTableHeader = (props) => {
    return (
        <thead>
            <tr>
                <th>First name</th>
                <th>Surname</th>
                <th>Date of birth</th>
                <th>Superpower</th>
            </tr>
        </thead>
    )
}


class CosmonautTable extends Component {
    render() {
        return (
            <table>
                <CosmonautTableHeader />
                <CosmonautTableBody />
            </table>
        )
    }
}

export default CosmonautTable