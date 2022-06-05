export function TodoListItem(props) {
    return (
      <div className="task">
        <label className="label">
          <input className="checkbox" type="checkbox" />
          <span className="fake"></span>
        </label>
        <p>{props.text}</p>
        <button id={props.id} className="close__btn btn" onClick={props.onRemoveClick}>x</button>
      </div>
    )
  }
  
export function TodoList(props) {
    const arr = props.list;
    const list = arr.map(item => 
      <TodoListItem 
        key={item.id} 
        id={item.id} 
        text={item.text} 
        onRemoveClick={props.onRemoveClick}/>
    )
  
    return (
      <div>
        {list}
      </div>
    )
  }
  