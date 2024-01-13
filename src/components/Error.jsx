import styled from "@emotion/styled"

const Texto = styled.div`

    background-color: #B7322C;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;


`


const Error = ({children}) => {
  return (
    <Texto>

        {children}
    </Texto>
  )
}

export default Error
