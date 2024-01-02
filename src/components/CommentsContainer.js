import React from "react";
import Comment from "./Comment";

const CommentsData = [
    {
        name:"pooja vishwakarma",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        reply:[]
    },
    {
        name:"pooja vishwakarma",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        reply:[
            {
                name:"pooja vishwakarma",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                reply:[]
            },
        ]
    },
    {
        name:"pooja vishwakarma",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        reply:[
            {
                name:"pooja vishwakarma",
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                reply:[
                    {
                        name:"pooja vishwakarma",
                        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        reply:[
                            {
                                name:"pooja vishwakarma",
                                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                                reply:[
                                    {
                                        name:"pooja vishwakarma",
                                        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                                        reply:[]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name:"pooja vishwakarma",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        reply:[]
    },
    {
        name:"pooja vishwakarma",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        reply:[]
    },
]

const CommentList =({comments})=>{
    return comments.map((comment,index)=>(
        <div key={index}>
            <Comment data={comment}/>
            <div className="border border-l-black ml-7">
                <CommentList comments={comment.reply}/>
            </div>
        </div>
    ))
}
const CommentsContainer=()=>{
    return(
        <div className=" m-5 shadow-sm">
            <h1 className=" font-bold text-2xl">Comments:</h1>
            <CommentList comments={CommentsData}/>
        </div>
    )
}
export default CommentsContainer;