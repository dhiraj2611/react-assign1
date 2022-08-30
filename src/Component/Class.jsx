import React from 'react';

class Class extends React.Component {
     
    constructor(){
        super()
        this.state = {
            display:false
          
        }
    }

   click = () =>{
        this.setState({
            display:!this.state.display
        })
    }
    
    render(){
        return(
            <>
            <button className="class" onClick={() =>this.click()}>
                To see styling in class component
                </button>
                {
                this.state.display ?
                    
                     
                   <div className='ClassCont'>
                       <h1>This is created using class components</h1>
                       <p>This is done by external CSS</p>
                       <p style={{color:"blue"}}>This is done using inline css</p>
                   </div>
                   : null
    }
            </>
        )
    }
     }

export default Class;