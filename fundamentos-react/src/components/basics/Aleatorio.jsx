import React from 'react'

export default (props) => {
    const {min, max} = props;
    let aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <>
            <h3>Número Aleatório</h3>
            <p>Número Aleatório entre {min} e {max} é: {aleatorio}</p>
        </>
    ) 
}
