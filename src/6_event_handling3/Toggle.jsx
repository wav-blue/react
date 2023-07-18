import React, {useEffect, useState} from "react";

function Toggle(props) {
    const [isToggleOn, setIsToggle] = useState(true);

    function handleClick( ) {
        setIsToggle((isToggleOn) => !isToggleOn);
        console.log("토글상태: ", isToggleOn);
    }
    
    //useEffect hook을 이용하여 렌더링 될 때마다 console에 state변수 값을 출력한다.
    useEffect(()=>{
        console.log("useEffect >> state 값 : "+isToggleOn);
    })

    return <button onClick={ handleClick }> 
    {isToggleOn ? "클릭A" : "클릭B"}
    </button>;
}
export default Toggle;