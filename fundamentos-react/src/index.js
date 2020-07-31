import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basics/Primeiro'

const el = document.getElementById('root')

const tag = <strong>Olá React</strong>

ReactDOM.render(
  <div>
    { tag }
    <Primeiro></Primeiro>
    </div>,
  el
  )