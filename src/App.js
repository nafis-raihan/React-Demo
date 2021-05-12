import React from "react"
import Card from './components/card'

function App(){

    return <div>
        <h1 className="headingStyle">Demo App</h1>
        <Card name="Md. Nafis Raihan" address="Azimpur" />
        <Card name="Tanjil Jishad" address="Gaibandha"/>
        <Card name="Ishtiaque Hossain Ayon" address="South Banasree"/>
    </div>
}

export default App;