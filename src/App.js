import React from 'react'
import Class from '../src/Component/Class';
import Functional from '../src/Component/Functional';
import "./Style.css"

function App() {

  return(<div className="App">
      <h1 className="head" style={{ textShadow: "2px 2px 2px aqua" }}>Styling using functional and class components</h1>


      <Class />
      <Functional />
    </div>

  )
}

export default App;