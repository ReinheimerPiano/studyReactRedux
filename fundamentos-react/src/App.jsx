import React from 'react';
import './App.css';

import Card from './components/layout/Card'
import Primeiro from './components/basics/Primeiro'
import Aleatorio from './components/basics/Aleatorio'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Repeticao from './components/repeticao/ListaAlunos'



export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
        <Card titulo="#06 - Lista Alunos" color="#f8f"><Repeticao></Repeticao></Card>

            <Card titulo="#05 - Componentes com Filhos" color="#68f">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="João"/>
                    <FamiliaMembro nome="Marcelo"/>
                </Familia>
            </Card>
            <Card titulo="#04 - Exemplo de Card" color="#256"></Card>
            <Card titulo="#04 - Desafio Aleatório" color="#080"><Aleatorio min={1} max={10}></Aleatorio></Card>
            <Card titulo="#01 - Primeiro" color="#818"><Primeiro></Primeiro></Card>
        </div>
    </div>
)