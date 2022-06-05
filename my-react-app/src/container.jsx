import { TodoForm } from "./form";
import { TodoList } from "./list";
import { useState, useEffect } from "react";

export const lowPriority = 'low';
export const highPriority = 'high';


export function TodoPriorityContainer(props) {
    const useStorage = JSON.parse(
      props.priority === highPriority ? 
      localStorage.getItem(highPriority) 
      : localStorage.getItem(lowPriority)
      )
    const [taskList, setTaskList] = useState(useStorage || [])
    const [taskText, setText] = useState('');
  
    function saveText(value) {
      setText(value)
    }

    useEffect(() => {
      const isPriorityHigh = props.priority === highPriority;

      if(isPriorityHigh) {
        localStorage.setItem(highPriority, JSON.stringify(taskList))
      } else {
        localStorage.setItem(lowPriority, JSON.stringify(taskList))
      }
      
    }, [taskList])
  
    function pushTask(e) {
      e.preventDefault()
      if (!taskText) return
  
      const task = {
        text: taskText,
        id: Date.now(),
        priority: props.priority
      }

      setTaskList(taskList.concat(task))
      setText('')
    }
  
    function hundleRemoveTask(e) {
      const taskId = Number(e.target.id)
      const filteredArr = taskList.filter(item => item.id !== taskId)
      setTaskList(filteredArr)
    }
  
    return (
      <div>
        <h1>{props.priority}</h1>
        <TodoForm 
          priority={props.priority} 
          onSubmit={pushTask} 
          onChange={saveText}
          value={taskText} />
        <TodoList 
          priority={props.priority} 
          list={taskList}
          onRemoveClick={hundleRemoveTask} />
      </div>
    )
  }