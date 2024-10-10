import React, { useState } from 'react'
  let vis;
export    let showPanel;
    export default function Panel({form}) {
      const[data, setData] = useState(form);
      showPanel = setData;
      if(data) { vis = "visible"; }else{ vis = "hidden"; }
      return (<div className="cover" style={{visibility:vis}}><div id="panel" className="hidden" style={{visibility:vis}}>
        <div className="dataPanel">{data}</div>
        <input type="button" className="closer" title="Закрыть" value="X" onClick={ () => {let data = false;setData(data)} } />
      </div></div>
      );
    }
