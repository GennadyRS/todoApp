import React,{useState} from 'react'
import AddComment from './AddComment'

  export default function Comments({commentData}){
          const [dat,setData] = useState(commentData)
          let updateData = setData;
          let data = dat;
          let p=[];
          let timeout='';
          
  function Comment({ comment, p, type }) {
    const[isEdit,setEdit]=useState(false)
    const handleClick=function(){setEdit(true); timeout=window.setTimeout(()=>setEdit(false),3000);}
    const handleFocus=function(){clearTimeout(timeout)}
    const handleBlur=function(){timeout=window.setTimeout(()=>setEdit(false),500)}
    let pp = p;
    const nestedComments = (comment.comments || []).map((comment,j) => {
      pp=j;
      return <Comment p={p+' | '+pp} key={Math.random()} comment={comment} type="comment" /> 
    })
    return (
      <div name={ comment.id } p={p} type={type}  onFocus={handleFocus}
        style={{marginLeft:"10px",paddingLeft:"10px",paddingTop:"1em",borderLeft:"1px solid rgba(64,64,128,0.5)"}}>
        <div>{comment.id && 'id: '+comment.id}</div>
        <div>{comment.author}</div>
        <div className="commentData">
        <div onClick={handleClick} style={{cursor:"pointer"}}>{comment.text}</div>
        </div>
        {isEdit && <div onBlur={handleBlur} onFocus={handleFocus}><AddComment p={p} data={data} updateData={updateData}/></div>}
        {nestedComments}
        <div className="spacer"></div>
      </div>
    )
  }
          
    return(
      <div className="comments">
      {
        commentData.map((comment,i) => {
        p=p.slice(0,0)
        p.push(i);
          return <Comment key={Math.random()} p={p} comment={comment} type="comment"/>
        })
      }
      </div>
    )
  }
