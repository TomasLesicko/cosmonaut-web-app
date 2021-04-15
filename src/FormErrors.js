import React from 'react'

const FormErrors = ({ errors }) => {
    return (
        <div className="form-cosmonaut-error">
            {Object.keys(errors).map((name, i) => {
                if (errors[name]) {
                    return <p key={i}>{errors[name]}</p>
                }
                return ''
            })}
        </div>
    )
}

export default FormErrors