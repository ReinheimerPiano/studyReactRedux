import React from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import If, { Else } from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/* <If test={usuario && usuario.nome}>
                Seja bem Vindo <strong>{usuario.nome}</strong>
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem Vindo <strong>Meu Chapa</strong>
            </If> */}

            <If test={usuario && usuario.nome}>
                Seja bem Vindo <strong>{usuario.nome}</strong>
                <Else>
                    Seja bem Vindo <strong>Meu Chapa</strong>
                </Else>
            </If>
        </div>
    )
}