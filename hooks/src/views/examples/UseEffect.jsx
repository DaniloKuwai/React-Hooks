import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function calcFatorial(num){
    const n = parseInt(num)
    if(n < 0) return -1
    if(n ===0) return 1
    return calcFatorial(n-1) * n
}

function calcParImpar(num){
    const i = parseInt(num)
    const result = i % 2
    return result
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial,setFatorial] = useState(1)

    const [number2,setNumber2] = useState(0)
    const [resultado,setResutado] = useState(0)

    {/* useEffect exercício 02*/}

    useEffect(function(){
        setResutado(calcParImpar(number2))
    },[number2])


    {/* useEffect exercício 01*/}
    useEffect(function (){
        setFatorial(calcFatorial(number))
    },[number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>

            <div className="center">
                <div>
                <span className="text">Fatorial:</span>
                <span className="text red"> {fatorial === -1 ? 'Não existe' : fatorial }</span>
                </div>
            <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <div>
                    <span className="text">Par ou Impar:</span>
                    <span className="text red"> {resultado === 0 ? 'Par' : 'Impar'} </span>
                </div>
                <input type="number" className="input" value={number2} onChange={e => setNumber2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
