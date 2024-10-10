import stack from './TaskList';
import {astack} from './TaskList';

    export default function Left({handleStack}){
      return stack && stack.length > 0 &&
        <div id="arrowLeft"
        title="Отменить последнее действие"
        className="arrow"
        style={{left:"1em"}}
        onClick={handleStack}> {"<"}
      </div>
    }
    
    export function Right({handleStack}){
      return astack && astack.length > 0 &&
        <div id="arrowRight"
        title="Применить отменённое действие"
        className="arrow"
        style={{right:"1em"}}
        onClick={handleStack}> {">"}
      </div>
    }
