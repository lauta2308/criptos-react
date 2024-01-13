import {useState} from 'react'
import styled from '@emotion/styled';



const Label = styled.label`

    color: white;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 5px 0;



`


const Select = styled.select`

    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;



`


const SelectCriptoMonedas = ({label, monedas, cripto, setCripto}) => {



  return (
   

            <>
            
                <Label>{label}</Label>

                <Select
                
                    value={cripto}
                    
                    onChange={e => setCripto(e.target.value)}
                
                >


                <option value="">Seleccione</option>
                {monedas.map( opcion => (
                    <option 
                        key={opcion.name}
                        value={opcion.name}
                    >{opcion.name}</option>
                ))}

                </Select>
            
            </>
    )

}

export default SelectCriptoMonedas
