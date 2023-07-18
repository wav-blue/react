import   { useState }  from  "react";
import   ButtonClick   from   "./ButtonClick";
import Timer from "./Timer"

function  ClickGame( ) {
  const [ showBtn,  setshowBtn ] = useState(false);
  
  return (
    <div>
        <header>
            <button  
                onClick={ ( ) => setshowBtn( ! showBtn ) } >
                시작
            </button>
            {  showBtn && <Timer   /> }
            {  showBtn && <ButtonClick   /> }
       </header>
    </div>
  );
}

export default   ClickGame;
