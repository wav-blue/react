/*Context API를 사용한 방법*/

import React from "react";

//컨텍스트 객체 생성
const ThemeContext = React.createContext('light');

function ContextApp(){
    return(
        //컨텍스트 제공
        <ThemeContext.Provider value='lavender'>
            <Toolbar/>
        </ThemeContext.Provider>
    )
}

function Toolbar(){
    return(
        <div>
            <ThemeButton />
        </div>
    )
}

function ThemeButton(){
    return(
        <div>
            <Button />
        </div>
    )
}

function Button(){
    return(
        //컨텍스트 구독요청
        <div>
            <ThemeContext.Consumer> 
                {value => (<div
                    style={{
                        margin: 50,
                        padding: 50,
                        backgroundColor: value, //이곳에서 사용
                    }}>
                        <p>컨텍스트를 가지고 데이터를 전달하는 예</p>
                        <button>확인</button>
                    </div>)}
            </ThemeContext.Consumer>
        </div>
    )
}

export default ContextApp;