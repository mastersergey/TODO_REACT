
export function TodoForm(props) {
    const placeholderText = props.priority === 'high' ? 'Добавить важных дел' : 'Добавить';
  
    function onInputChange(event) {
      props.onChange(event.target.value)
    }
  
    return (
      <form onSubmit={props.onSubmit}>
        <input 
        value={props.value}
        onChange={onInputChange}
        type="text" 
        className="todo__input" 
        placeholder={placeholderText}  />
        <button className='add__btn btn'>+</button>
      </form>
    )
  }