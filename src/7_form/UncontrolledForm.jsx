import React, { useRef } from "react";
import './SignUp.css'
function UncontrolledForm( ) {
const inputRef = useRef();
const handleSubmit = (event) => {
alert('이름: ' + inputRef.current.value); // 김먼저
console.log(inputRef.current.value); // 김먼저
event.preventDefault();
}
return (
    <form onSubmit={ (e) => handleSubmit(e) } >
    <label>
    이름:
    <input type="text" ref={inputRef} />
    </label>
    <input type="submit" value="제출하세요" />
    </form>
    );
    }
    export default UncontrolledForm;