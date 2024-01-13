import { useState , useEffect} from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

import imgCripto from './img/imagen-criptos.png'
import Spinner from './components/Spinner'


const Contenedor = styled.div`

    max-width: 900px;
    margin: 0 auto;
    width: 90%;

    @media(min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }

`


const Heading = styled.h1`

  color: white;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;


  &::after {

      content: '';
      width: 100px;
      height: 6px;
      background-color: #66A2FE;
      display: block;
      margin: 10px auto 0 auto;



  }


`;

const Imagen = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;

`





function App() {


  const[conversion, setConversion] = useState({});
  const[resultado, setResultado] = useState({});
  const[cargando, setCargando] = useState(false)

  useEffect(() => {

    if(Object.keys(conversion).length > 0){
    
      setCargando(true)
      setResultado({})
      

        const cotizarCripto = async () => {
          const {moneda, cripto} = conversion;

         const url = `
          https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}
          
          `
          
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          
         
          setResultado(resultado.DISPLAY[cripto][moneda])
          setCargando(false)
         
        }


        cotizarCripto()

        
    }

  }, [conversion])


  return (

      

      <Contenedor>
            <Imagen
              src={imgCripto}
              alt= 'imagen criptomonedas'
            
            ></Imagen>

            <div>
                 <Heading>Cotiza criptomonedas al instante</Heading>

         
                
                 <Formulario
                    conversion= {conversion}
                    setConversion= {setConversion}
                 
                 
                 />


                {cargando && 
                
                <Spinner />
                
                }

                 {resultado.PRICE && 
                 
                 <Resultado
                    resultado = {resultado}
                 
                 
                 />

              
                 }
                

        
            </div>
          
      </Contenedor>

      
   
    
  )
}

export default App
