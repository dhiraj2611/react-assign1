import React, { useState } from 'react';



const Functional = () => {

    const [show, setShow] = useState(true)

    return (
        <>
            <button className="function" onClick={() => setShow(!show)}>
                To see styling in functional component
            </button>
            {
                show ?
                    null : <div className='FuncCont'>
                        <h1>This is created using functional components</h1>
                        <p>This is done by external CSS</p>
                        <p style={{ color: "blue" }}>This is done using inline css</p>
                    </div>
            }

        </>

    )
}

export default Functional;