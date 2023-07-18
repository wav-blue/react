import React, { useState} from "react";
import { useEffect } from "react";

function ButtonClick(props){
    const [count, setCount] = useState(0);

    

    return(
        <div>
            


            <button onClick={()=> setCount(count+1)}>클릭!!</button>
            <p>총 <b>{count}번</b> 클릭되었습니다</p>
        </div>
    )
    
}

export default ButtonClick;