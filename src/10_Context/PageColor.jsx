import React, {useState, useContext} from "react";
import './PageColor.css';
/*
Page엔 넘길 필요 없이 Header, Contents, Footer에 Context를 넘긴다
*/

//컨텍스트 객체 생성
const ColorCotext = React.createContext(null);

function PageColor(){
    const [isDark, setIsDark] = useState(false);

    return(
        //컨텍스트 제공
        <ColorCotext.Provider value={{isDark, setIsDark}}>
            <Page/>
        </ColorCotext.Provider>
    )
}
function Page(){
    return(
        <div className="page">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
function Header(){
    //useContext훅을 이용해 컨텍스트 구독 요청
    const {isDark} = useContext(ColorCotext);
    return(
        <header className="header"
        style={{
            backgroundColor: isDark? 'black':'lightgray',
            color: isDark? 'white':'black',
        }}>
            <h2>컨텍스트 사용강의</h2>
        </header>
    )
}

function Content(){
    //useContext훅을 이용해 컨텍스트 구독 요청
    const {isDark} = useContext(ColorCotext);
    return (
        <content className='content'
        style={{
            backgroundColor: isDark? 'black':'lightgray',
            color: isDark? 'white':'black'
        }}>
            <p>오늘은 리액트 10주차 강의이며, Context를 배우고 있습니다.</p>
        </content>
    )
}

function Footer(){
    //useContext훅을 이용해 컨텍스트 구독 요청 (button을 위해 setIsDark 필요)
    const {isDark, setIsDark} = useContext(ColorCotext);
    const toggleColor = () => {setIsDark(!isDark);} //button 클릭 시 색상반전
    return(
        <footer className="footer"
        style={{
            backgroundColor: isDark? 'black':'lightgray',
            color:isDark? 'white' :'black',
        }}>
            <button className="button" onClick={toggleColor}>색상반전</button>
        </footer>
    )
}
export default PageColor;