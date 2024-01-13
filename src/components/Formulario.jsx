import React from 'react'
import styled from '@emotion/styled'
import UseSelectMonedas from './UseSelectMonedas'
import {monedas} from '../data/monedas'


const InputSubmit = styled.input`

        background-color: #9497FF;
        border: none;
        width: 100%;
        padding: 10px;
        color: #FFF;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 20px;
        border-radius: 5px;
        text-align: center;
        margin-top: 30px;

        &:hover {

            background-color: #7A7DFE;
            cursor: pointer;
            transition: background-color .3s ease;

        }



`



const Formulario = () => {





  return (
   <form action="">

        <UseSelectMonedas
        
          label= 'Elige tu moneda'
          monedas = {monedas}
        
        
        />




        <InputSubmit
                   type="text"
                   value="cotizar"
        
        />


   </form>
  )
}

export default Formulario
