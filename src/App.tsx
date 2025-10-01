// import { useSelector } from 'react-redux'
import AddTask from './AddTask'
import './App.css'
import Card from './TaskCard'
// import type { RootState } from './state/store'
import {collection, getDocs} from "firebase/firestore"
import { useState, useEffect } from 'react'
import { db } from './firebase'

function App() {
  const [toDos, setTodos] = useState<any[]>([])
  // const todos = useSelector((state: RootState)=> state.todo)

  useEffect(()=>{
    const getData = async()=>{
      console.log("ran")
      const querySnapshot = await getDocs(collection(db, "tasks"));
        querySnapshot.forEach((doc) => {
          setTodos(t=> t=[...t, {...doc.data(), id:doc.id}])
          console.log(doc.id , '=>' , doc.data());
      });
    }
    getData()
  }, [])

  console.log(toDos)
  return (
    <section className='pt-5 md:px-40 justify-center items-center flex min-w-fit flex-col gap-5 bg-blue-800 min-h-screen'>
      <AddTask/>
      <div className="container flex flex-col gap-2">
        {toDos?.map((todo)=><Card key={todo.id} {...todo}/>)}
      </div>
    </section>
  )
}

export default App