import React, { useState } from 'react'
import './Mega.css'

export default props => {

    function geraNumeroNaoContido(min, max, arr) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return arr.includes(aleatorio) ?
            geraNumeroNaoContido(min, max, arr) :
            aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = geraNumeroNaoContido(1, 60, nums)
                console.log([...nums, novoNumero])
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros;
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className='Mega'>
            <h2>Mega - CORREÇÃO</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de Números:</label>
                <input type='number' value={qtde} 
                min='6'
                max='15'
                onChange={e => {
                    setQtde(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))}}></input>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Numeros</button>
        </div>
    )
}