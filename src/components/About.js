import React from "react"
// import { useState } from "react";

function About(props){

    // const [myStyle , setMyStyle ]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#6d6e70',
        backgroundColor: props.mode === 'dark' ? '#6d6e70' : 'white',
        // border: '2px solid',
        borderColor: props.mode === 'dark'?'white':'#6d6e70'

    }
    // const [btntext , setBtnText] = useState("Enable dark Mode")
    
    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    // }
    return(
        <div className="container" style={myStyle}>
        <h2>About us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <strong> Analyse Your Text </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div style={myStyle} className="accordion-body">
                        TextUtils is a React based project which gives u a way to analyze your text quickly and efficiently. Be it word count, character count or time to read.
                    </div>
                    </div>
                </div>
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong> Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        TextUtils is a free character counter tool that provides instant charcter count, word count and much more.
                    </div>
                    </div>
                </div>
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button style={myStyle}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong> Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    This word counter software works in any web browsers such as Chrome, Firefox , Internet Explorer , Safari , Opera. It suits to count character in facebook, blog , books, excel document , pdf document , essays , etc.
                    </div>
                    </div>
                </div>
        </div>
        </div>
    )


}

export default About;