import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import UseSelectMonedas from './UseSelectMonedas'
import SelectCriptoMonedas from './SelectCriptoMonedas'
import {monedas} from '../data/monedas'
import Error  from './Error'


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



const Formulario = ({conversion, setConversion}) => {

  const[error, setError] = useState(false);
  const[criptos, setCriptos] = useState([]);
  const[moneda, setMoneda] = useState("");
  const[cripto, setCripto] = useState("");


  useEffect(() => {

      const consultarApi = async () => {
          const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

          const respuesta = await fetch(url);

          const resultado = await respuesta.json();

         const arregloCriptos = resultado.Data.map(cripto => {

              const objeto = {
                  'name': cripto.CoinInfo.Name,
                  'fullName': cripto.CoinInfo.FullName

              }

              return objeto;

         })
          
          setCriptos(arregloCriptos);

          

      }


      consultarApi()

  }, [])


  const handleSubmit = e => {

    console.log("validando..")
      e.preventDefault();


      if([cripto, moneda].includes("")){
        setError(true)

        return;
      }

      console.log("continua..")
      setError(false)
      setConversion({
        moneda,
        cripto
      })


  }


  return (


    <>

    
              {error && 
                
                <Error>

                  Todos los campos son obligatorios
                  
                </Error>
                
                }
    
    
    

    
    <form onSubmit={handleSubmit}>

<UseSelectMonedas

  label= 'Elige tu moneda'
  monedas = {monedas}
  moneda = {moneda}
  setMoneda = {setMoneda}


/>

<SelectCriptoMonedas
    
    label = 'Elige tu criptomoneda'
    monedas = {criptos}
    cripto = {cripto}
    setCripto = {setCripto}


/>




<InputSubmit
           type="submit"
           value="cotizar"

/>


</form>
    
    
    
    </>

  
  )
}

export default Formulario
