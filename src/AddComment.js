import React,{useState} from 'react'

export default function AddComment({ data,updateData,p }) {
      const [author, setAuthor] = useState('');
      const [text, setText] = useState('');
      const handleReady = (e) => {e.target.scrollIntoView({behavior: 'smooth',block: 'nearest',inline: 'center',});}
      const handleSubmit = (e) => {
          let el = e.target;
            while(!el.attributes.p){
              el = el.parentNode;
            }
            let arr=el.attributes.p.value.split(" | ");
            let a = data;
              for(let i in arr){
                a = a[arr[i]]["comments"];
              }
            let comment = {
              id: Math.random(),
              text: text,
              author: author,
              comments: []
            }
            a.push(comment);
            updateData(data.slice());
        }

      return (
        <form className="add-comment" onAnimationStart={event=>{handleReady(event);}} onSubmit={handleSubmit}>
          <input type="text"
            title = { "Введите имя автора" }
            placeholder={"Введите имя автора"}
            value={author}

              onChange={
                event => setAuthor(event.target.value)
              }
            required /><br/>
          <textarea placeholder={"Введите текст комментария"}
            value={text} 
            title = { "Введите текст комментария" }
            rows='5'

              onChange={
                event => setText(event.target.value)
              } required /><br/>
          <button type="submit">Добавить комментарий</button>
        </form>
      );
    }
