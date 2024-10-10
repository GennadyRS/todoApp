import React,{useState} from 'react'

    export default function TextInputField({p,onBlur,tasks,setTable}){
      const [isEdit,setIsEdit]=useState(false);
      let value = tasks;
        for(let i in p){
          if(value[p[i]]){value = value[p[i]];}
        }
        let initialValue = value;
      const [val,setVal]=useState( value );
      return (!isEdit
        ? <div className="txtInpFld" onClick={() => setIsEdit(true)}>{ value }</div>
        : <React.Fragment><br/><textarea value={val}
        className="txtInpFld"
        cols="20" rows="3"
          onChange={ (event) => {
            setVal( event.target.value );
          } }
          onBlur={
            function(e){
              if(initialValue !== val){if(val!==""){onBlur(e)}else{e.target.value='_';onBlur(e)}}else{}
              setIsEdit(false)
            }
          }
          
        autoFocus /><br/></React.Fragment>
      )
    }
