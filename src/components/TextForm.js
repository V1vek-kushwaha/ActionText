import React,{useState} from 'react'
import Alert from './Alert';

export default function TextForm(props) {
    const [alert, setAlert] = useState(null)


    const showAlert=(massage,type)=>{
        setAlert({
          msg : massage,
          type : type 
              })
              setTimeout(()=>{
                setAlert(null)
              },2000);
      }
    const hendleCopy =()=>{
        var text =document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        showAlert("Copy Text","success");

        
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        showAlert("Remove Extra Space","success");
        
    }
    
    const handleOnChange=(event)=>{
        console.log("clicked")
        setText(event.target.value)
    }
    const hendleUpClick=()=>{
        console.log("On Change"+text)
        let newText = text.toUpperCase();
        setText(newText);
        showAlert("Converted To Uppercase","success");

    }
    const hendleLowerClick=()=>{
        console.log("On Change"+text)
        let newText = text.toLowerCase();
        setText(newText);
        showAlert("Converted To Lowercase","success");

    }
    
    const clearAll=()=>{
        let newText = '';
          setText(newText)    
          showAlert("Clear All Text","success");
    }


    

            {/*const [text, settext] = useState('enter the text here');
            const capitalize = () => {
                
                let firstchar = text.charAt(0); // storing the first char of the string
                let newtext= firstchar.toUpperCase(); // converting that to uppercase
                
                let a = (newtext+text.slice(1))
                console.log(a)
                settext(a); // printing it with rest excluding the first char by using slice

            */ }
const [text, setText] = useState("");
    
    return (
        <div>
                    <Alert alert={alert}/>
                    

        <div  style={{color :props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
              <textarea className="form-control"  value={text}  style={{backgroundColor :props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}} onChange={handleOnChange}  id="MyBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-3" onClick={hendleUpClick}  > Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={hendleLowerClick}  > Convert To Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={hendleCopy}  > Copy All Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-3" onClick={handleExtraSpaces}  >Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-danger mx-3 my-3" onClick={clearAll}  >Clear All </button>
        </div>
        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`} >
            <h3>Text Information</h3>
            <p>Total Charctors is {text.split(" ").filter((element)=>{return element.length!==0}).length} Totel Words {text.length}</p>
        </div>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
           
        <h4>Preview</h4>
        <p>{text.length>0?text:"nothing to privew"}</p>
        </div>
        </div>
    )
}
 