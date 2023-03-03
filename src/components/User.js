import React from 'react'

function User(props) {
    // console.log(props)
const data = props
    return (
        <div>
            <h2>USER DATA</h2>
            <h4>{data.name}</h4>
            {/* <h4>{data.age}</h4> */}
        </div>
    )
}

export default User
