import React from "react"
import Card from './components/card'
import Card2 from './components/card2'
import Data from './data.json'

function App(){

    return <div>
        <h1 className="headingStyle">Demo App</h1>
        <Card name={Data[0].name} address={Data[0].address} />
        <Card name="Tanjil Jishad" address="Gaibandha"/>
        <Card name="Ishtiaque Hossain Ayon" address="South Banasree"/>
        <Card2 />
    </div>
}

export default App;