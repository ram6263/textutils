import React, { useState } from 'react'

export default function Textform(props) {
    const handleupclick = () => {

        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase","success")
    }
    const handlelowclick = () => {

        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("converted to lowercase","success")
    }
    const handleclear = () => {
        setText(" ")
        props.showAlert("text clear","success")
    }
    const handleExtraspace = () => {
        let newtext=text.split(/[]+/);
        setText(newtext.join(" "))
    }
    const handlcopy = () => {
        var text=document.getElementById("my-box")
        text.select();
        text.setSelectionRange(0,99999);
        navigator.clipboard.writeText(text.value);
        props.showAlert(" copy Text","success")
        
       
    }
  
    const handleOnChange = (event) => {

        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <div>
            <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='dark'?'white':'#042743'}} value={text} id="my-box" rows="8"></textarea>
                </div>
                <button className='btn btn-primary my-3 mx-2' onClick={handleupclick}>upperCase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handlelowclick}>lowercase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handlcopy}>copyText</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handleclear}>clear</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handleExtraspace}>remove extra space</button>
                
            </div>
            <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length>1 ? text.split(" ").length - 1: 0 } words, {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>
        </div>
    )
}
