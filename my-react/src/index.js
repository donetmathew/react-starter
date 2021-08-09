import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App = ()=>{
    return (
    <div className="ui container comments">
        <ApprovalCard>
           <CommentDetail author="Sam" avatar={faker.image.avatar()} timeAgo="Yesterday at 4:00 p.m"/>
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetail author="Donet" avatar={faker.image.avatar()} timeAgo="Yesterday at 6:00 p.m"/>
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetail author="Ritu" avatar={faker.image.avatar()} timeAgo="Yesterday at 8:00 p.m"/>
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetail author="Sakshi" avatar={faker.image.avatar()} timeAgo="Yesterday at 9:00 p.m"/>
        </ApprovalCard>
    </div>
    );
}

ReactDom.render(<App/>, document.querySelector("#root"));
