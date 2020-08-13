import React from 'react';
import './App.css';

import Primeiro from './components/basics/Primeiro'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import Repeticao from './components/repeticao/ListaAlunos'
import DesafioRepeticao from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import Direta from './components/comunicacao/DiretaPai'
import Indireta from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/Mega/Mega'
import MegaC from './components/Mega/MegaCorrecao'


export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

        <Card titulo="#13 -  Desafio Mega Sena" color="#002"><Mega></Mega><hr/><MegaC></MegaC></Card>
        <Card titulo="#12 -  Contador" color="#200"><Contador numeroInicial={10}></Contador></Card>
        <Card titulo="#11 -  Componente Controlado" color="#c77"><Input></Input></Card>
        <Card titulo="#10 -  Comunicação Indireta" color="#bbb"><Indireta></Indireta></Card>
        <Card titulo="#09 -  Comunicação Direta" color="#bb3"><Direta></Direta></Card>
            <Card titulo="#08 - Renderização Condicional" color="#bb0">
                <ParOuImpar numero={213}></ParOuImpar>
                <UsuarioInfo usuario={{nome:'Fernando'}}></UsuarioInfo>
                <UsuarioInfo usuario={{email:'fer@nando.com'}}></UsuarioInfo>
            </Card>
            <Card titulo="#07 - Desafio Repetição" color="#b00"><DesafioRepeticao></DesafioRepeticao></Card>
            <Card titulo="#06 - Repetição" color="#f8f"><Repeticao></Repeticao></Card>
            <Card titulo="#05 - Componentes com Filhos" color="#68f">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome="Marcelo" />
                </Familia>
            </Card>
            <Card titulo="#04 - Exemplo de Card" color="#256"></Card>
            <Card titulo="#04 - Desafio Aleatório" color="#080"><Aleatorio min={1} max={10}></Aleatorio></Card>
            <Card titulo="#01 - Primeiro" color="#818"><Primeiro></Primeiro></Card>
        </div>
    </div>
)