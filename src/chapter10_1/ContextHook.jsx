/* Context API와 useContext() hook을 사용한 방법 */
import React from "react";
import { useContext } from "react";

//컨텍스트 객체생성
const ThemeContext = React.createContext('light');

function ContextHook(){
    return(
        //컨텍스트 제공
        <ThemeContext.Provider value="lavender">
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

function Toolbar(){
    return(
        <div>
            <ThemeButton/>
        </div>
    )
}

function ThemeButton(){
    return(
        <div>
            <Button/>
        </div>
    )
}

function Button(){
    const value = useContext(ThemeContext);
    return(
        <div
        style={{
            margin: 50,
            padding: 50,
            backgroundColor: value,
        }}>
            <p>컨텍스트를 가지고 데이터를 전달하는 예</p>
            <button>확인</button>
        </div>
    )
}

export default ContextHook;