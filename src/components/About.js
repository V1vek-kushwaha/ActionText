
import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function About(props) {
  
  const [myStyle, setmyStyle] = useState(
    {
      color:'black',
      backgroundColor:'white'
    }
  )


    
  // let myStyle ={
  //   color : props.mode === 'white'?'black':'white',
  //   backgroudColor : props.mode === 'dark'?'#14304c':'white'
  // }
  
  
    return (
        <div  className= "container" style={myStyle}>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Introduction
      </button>
    </h2>
    <div   id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This application allows you to specify a Text Fonts.</strong>  from the list of text styles installed on that machine and update entire projects text note style, including all the families loaded on project.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       About More.
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>It will starts the command and launches the.</strong> “Text Note Utility” Form dialog.

From the “Text Note Utility” Form “Selection” check the one you want to update.

“Text Note style in this project” – to update all the text note style on this project.

“Text Note Style of loaded Families in this project” – to update all the loaded families’ text note style.

From the “Text Note Utility” Form “Text Style”
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
   
      
  </div>
</div>
      </div>
        
    )
}
