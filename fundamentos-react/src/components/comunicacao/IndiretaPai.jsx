import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    let nome = '?'
    let idade = 0
    let nerd = false

    // nome idade nerd
    function fornecerInformacoes(nomeParan, idadeParan, nerdParan) {
        nome = nomeParan
        idade = idadeParan
        nerd = nerdParan

        console.log(nomeParan, idadeParan,nerdParan)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}
