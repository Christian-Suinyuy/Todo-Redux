
import { useSelector } from 'react-redux'
import AddTask from './AddTask'

import './App.css'
import Card from './TaskCard'
import type { RootState } from './state/store'

function App() {
  const todos = useSelector((state: RootState)=> state.todo)
  return (
    <section className='pt-5 flex min-w-fit flex-col gap-5 bg-blue-800 min-h-screen'>
      <AddTask/>
      <div className="container flex flex-col gap-2">
        {todos?.list?.map((todo,idx)=><Card key={todo+idx} description={todo} id={idx}/>)}
        
      </div>
    </section>
  )
}

export default App
