import React from 'react'

const CosmonautTableBody = (props) => {
    return (
        <tbody>
            {props.cosmonauts.map((cosmonaut, index) => {
                return (
                    <tr key={index}>
                        <td>{cosmonaut.name}</td>
                        <td>{cosmonaut.surname}</td>
                        <td>{cosmonaut.birth}</td>
                        <td>{cosmonaut.superpower ? cosmonaut.superpower : "none"}</td>
                        <td>
                            <button className="button-edit" type="button">Edit</button>
                            <button className="button-delete" type="button" onClick={() => props.removeCosmonaut(index)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}


const CosmonautTableHeader = () => {
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


const CosmonautTable = (props) => {
    return (
        <table className="cosmonaut-table">
            <CosmonautTableHeader />
            <CosmonautTableBody cosmonauts={props.cosmonauts} removeCosmonaut={props.removeCosmonaut} />
        </table>
    )
}

export default CosmonautTable