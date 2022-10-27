import React from "react";
import { AiFillWarning, AiFillInfoCircle, AiFillBell, AiOutlineFrown } from "react-icons/ai";

function Diagram(props) {
    const confirmClick = () =>{
        alert(`확인되었습니다.`);
    }

    const { title, backgroundColor, textColor, btn, imgType, message, children } = props;
    return (
    <div
    style={{
        margin:8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: backgroundColor || "white",
        color: textColor || "black",
        }}
    >
    {(imgType=="warning")&&<AiFillWarning size="50" color={textColor}/>}
    {(imgType=="info")&&<AiFillInfoCircle size="50" color={textColor}/>}
    {(imgType=="notification")&&<AiFillBell size="50" color={textColor}/>}
    {(imgType=="error")&&<AiOutlineFrown size="50" color={textColor}/>}
    {title && <h1>{title}</h1>}
    {message}
    {children}
    {btn=='true'&&<button onClick={confirmClick}>ok</button>}
    </div>
    );
}
//color: 글자색 변경
//imgType에 따라 해당 icon을 출력
//message로 부가적인 내용을 받음
//btn의 값이 'true'일 때 ok버튼을 표시함

export default Diagram;