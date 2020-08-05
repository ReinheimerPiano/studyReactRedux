import React from 'react';
import './App.css';

import Card from './components/layout/Card'
import Primeiro from './components/basics/Primeiro'
import Aleatorio from './components/basics/Aleatorio'


export default () =>
    <>
    <h1>Fundamentos React</h1>
    <Card titulo="Exemplo de Card"></Card>
    <Card titulo="Desafio Aleatório"><Aleatorio min={1} max={10}></Aleatorio></Card>
    <Card titulo="Primeiro"><Primeiro></Primeiro></Card>
    </>