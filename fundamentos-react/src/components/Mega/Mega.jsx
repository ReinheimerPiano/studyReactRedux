import React, { useState } from 'react'

import './Mega.css'

export default props => {

    const gerarNumeros = (qtd) => {
        let numeros = [];
        for (let x = 1; x <= qtd && x < 60; x++) {
            let n = 0;
            do {
                n = Math.floor(Math.random() * 60 + 1);
            } while (numeros.find(e => e == n) != undefined && x < 60);
            numeros.push(n);
        };
        numeros.sort((a, b) => a - b);
        return numeros;
    }

    const [qtd, SetQtd] = useState(5)
    const [numeros, setNumeros] = useState(Array(qtd).fill(0).join(','))

    function mudaInput(e) {
        SetQtd(e.target.value);
        var b = Array(+e.target.value).fill(0).join(',');
        setNumeros(b);
    }

    function clickGerar() {
        var a = gerarNumeros(qtd).join(',')
        setNumeros(a);
    }

    return (
        <div className='Mega'>
            <h3>{qtd} Numeros da MegaSena</h3>
            <h3 style={{marginBottom: '5px', marginTop: '5px'}}>{numeros}</h3>

            <div>
                <label htmlFor='Qtd'>Qtd: </label>
                <input type='number' onChange={mudaInput} value={qtd}></input>
            </div>
            <button onClick={clickGerar}>Gerar Numeros</button>
        </div>
    )
}