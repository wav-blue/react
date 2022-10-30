import React, {useState, useEffect} from "react";
import './App.css';

const serverURL = "http://localhost:65020/users";   //웹서버 접속주소

function App(){
    const [userData, setUserData] = useState(null); //서버에서 받아올 사용자정보(객체배열)를 저장하는 곳
    const [text, setText] = useState(''); //사용자가 존재하는지를 표시하는 메시지
    const [search, setSearch] = useState([{id:"",passwd:""}]); //존재하는지 확인하고 싶은 값을 저장

    //값을 비교하고, 결과에 따라 표시할 텍스트의 내용을 변경하는 함수
    const searchData = () => {
        setText('그런 회원은 없습니다'); //초기화
        const isUser = userData.find(user => (user.id === search.id)); //id 일치 시
        console.log(isUser);
        
        if(isUser!=undefined){ //id가 일치하고 해당 id의 passwd값과 입력한 passwd값이 일치하는지 확인
            console.log(isUser.passwd === search.passwd);
            if(isUser.passwd == search.passwd){
                setText('회원으로 확인되었습니다'); //일치하면 text변경
            }        
        }
    }

    const getUserData = () =>{
        fetch(serverURL)                    //fetch함수를 이용해 REST API로 회원목록을 요청
        .then((res)=>res.json())            //회원목록을 json포맷으로 수신
        .then((data)=>setUserData(data))    //받은 데이터를 setState함수로 업데이트 함.
        .then(console.log(userData))        //콘솔창에 출력해서 확인함
    }

    useEffect(getUserData,[]);              //mount시에만 서버데이터를 가져오도록 이펙트처리

    const onSubmitHandler = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const id = event.target.id.value;
        const passwd = event.target.passwd.value;
        console.log("Submit버튼 클릭후 서버로 POST 전송");
        fetch(serverURL, {                          //fetch함수로 데이터를 서버로 전송
            method: 'POST',                         //POST method
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({name, id, passwd}),
        })
        .then(getUserData())                        //등록한 데이터를 다시 가져옴
    }

    //search 값(확인하려는 id, passwd)을 변경
    const onHandleChange = (e) => {
        console.log('name',e.target.name,'e',e.target.value);
        setSearch({
        ...search,
          [e.target.name]: e.target.value
        })
      }

    return(
        <>
        <div>
            <h2>회원등록</h2>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="name" placeholder="이름"/>
                <input type="text" name="id" placeholder="아이디"/>
                <input type="text" name="passwd" placeholder="암호"/>
                <button type="submit">등록</button>
                </form>
        </div>
        <p></p>
        <div>
            <h2>회원검색</h2>
                <input type="text" name="id" placeholder="아이디" onChange={onHandleChange}/>
                <input type="text" name="passwd" placeholder="암호" onChange={onHandleChange}/>
                <button onClick={searchData}>검색</button>
                <h3>{text}</h3>
                {
                //text 변수에 표시할 내용을 저장
                }
        </div>
        <p></p>
        <div>
                <h2>회원명단</h2>
                <ol>
                    {(userData === null)?(              //데이터가 수신되었는지를 확인
                        <p>서버에서 데이터를 가져오는 중....</p>
                    ):(
                        userData.map((user,i)=>(        //수신되었다면 목록으로 처리
                            <li key={user.keyid}> {user.name} {user.id} {user.passwd}</li>
                        ))
                    )}
                </ol>
        </div>
                </>
    )
} 
export default App;