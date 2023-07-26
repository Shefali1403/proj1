import React from 'react'
const Mostpopcomp=(props)=>{
return(
    <>
    <div className={props.className}>
        <p>{props.content}</p>
        <h3>{props.title}</h3>
    </div>
    </>
)
}
export default Mostpopcomp;