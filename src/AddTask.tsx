import { useState } from "react"
import { addTodo } from "./state/listSlice"
import { useDispatch} from "react-redux"
import type { todo } from "./state/listSlice"
import {collection, addDoc} from "firebase/firestore"
import { db } from "./firebase"
function AddTask(){
    let [inputElem, setElem] = useState<todo>({
        description: "",
        completed: false
    })

    const adding =async ()=>{
        
        try {
            const docRef = await addDoc(collection(db, "tasks"), {
                description:inputElem.description,
                completed: inputElem.completed
            });
        location.reload()
        console.log("Document written with ID: ", docRef.id)
        } catch (error) {
            console.error("Error adding document: ", error)
        }
    }

    const dispatch = useDispatch()

    return (
        <section className="max-w-full">
            <form  action="#" className="flex flex-col justify-between items-center">
                    <h2 className="text-2xl">Task</h2>
                <label htmlFor="task" className=" flex h-10">
                    <input value={inputElem.description} onChange={(e)=> setElem(i => i ={...i, description : e.target.value})} type="text" id="task" className="bg-white max-w-70 p-2" />
                    <button type="submit" onClick={()=>{
                        inputElem && dispatch(addTodo(inputElem))
                        adding()
                        setElem(s=> s ={...s, description: ""})}}  className=" bg-green-400 w-18">+ADD</button>
                </label>
            </form>
        </section>
    )
}

export default AddTask