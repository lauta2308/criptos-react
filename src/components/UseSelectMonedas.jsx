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


const UseSelectMonedas = ({label, monedas}) => {

    const[state, setState] = useState("");


  return (
   

            <>
            
                <Label>{label}</Label>

                <Select
                
                    value={state}
                    
                    onChange={e => setState(e.target.value)}
                
                >


                <option value="">Seleccione</option>
                {monedas.map( opcion => (
                    <option 
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}

                </Select>
            
            </>
    )

}

export default UseSelectMonedas
