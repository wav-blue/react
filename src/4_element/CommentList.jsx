import React from "react";
import Comment from "./Comment";
import { Comments} from "./CommentList.js";

function CommentList ( ) {
    return (
    <div>
        { Comments.map((comment) => {
          return <Comment name={comment.name} comment={comment.comment} img={comment.img}/>;
        }) }
    </div>
    );
}   
export default CommentList;