import React from 'react'
import { TodoPriorityContainer, lowPriority, highPriority } from './container'
import ReactDOM from 'react-dom/client'
import './index.css'

const container = ReactDOM.createRoot(document.getElementById('container'))

 

function TodoApp() {
  return (
    <div>
      <TodoPriorityContainer priority={highPriority} />
      <TodoPriorityContainer priority={lowPriority} />
    </div>
  )
}

container.render(<TodoApp />)