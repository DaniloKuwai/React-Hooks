import React from 'react'

export const data = {
    number: 123,
    text: 'Context API...'
}

const DataContext = React.createContext(data)//com esse comando, estamos criando um contexto 
// para conseguir usar em qualquer outro componente.

export default DataContext