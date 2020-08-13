import React from 'react'

export default props => {
    const cb =  props.setPasso
    return (
        <div>
            <label htmlFor='passoInput' >Passo: </label>
            <input id="passoInput" type="number"
                value={props.passo} onChange={e => cb(+e.target.value)} />
        </div>
    )
}