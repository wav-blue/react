import React, { useState } from "react";
import "./myStyle.css";

const RealtimeText = () =>{
    const [who, setWho] = useState("");
    const [myText, setText]=useState("");

    const onChange=(e)=>{
        //아래에 실시간 출력
        setWho( (who)=>document.getElementById("myWho").value)
        //실시간 출력
        setText((myText)=>document.getElementById("myInputText").value);
    };

    const onReset = (e)=>{
        setWho("");
        setText(""); //state변수를 초기화
    }
    const onSave = (e)=>{
        setWho((who)=>document.getElementById("myWho").value)
    }
    return(
        <div className="frame1">
        <div>
            글쓴이: {" "}
            <input onChange={onChange} value={who} id="myWho" size="8" maxlength="8"/>{" "}
            글내용: {" "}
            <input onChange={onChange} value={myText} id="myInputText" size="45" maxlength={45}/>{" "}
            <button onClick={onReset}>지우기</button>
            <button onClick={onSave}>저장</button>
            <hr/>
            <div><span id="who">{who} </span><span id = "text">{myText}</span>
            </div>
            </div>
        </div>
    )
}
export default RealtimeText