import React from 'react';
import './App.css';

import Card from './components/layout/Card'
import Primeiro from './components/basics/Primeiro'
import Aleatorio from './components/basics/Aleatorio'


export default () =>
    <>
    <Card titulo="Exemplo de Card"></Card>
    <Aleatorio min={1} max={10}></Aleatorio>
    <Primeiro></Primeiro>
    </>