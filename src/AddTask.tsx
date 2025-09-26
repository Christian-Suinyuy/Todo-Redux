import { useState } from "react"
import { addTodo } from "./state/listSlice"
import { useDispatch} from "react-redux"

function AddTask(){
    let [inputElem, setElem] = useState<string>("")
    const dispatch = useDispatch()
    // const addTodo = ()=>{
    //     dispatch(addTodo('whats'))
    // }
    return (
        <section className="max-w-full">
            <form  action="#" className="flex flex-col justify-between items-center">
                    <h2 className="text-2xl">Task</h2>
                <label htmlFor="task" className=" flex h-10">
                    <input value={inputElem} onChange={(e)=> setElem(elem=> elem = e.target.value)} type="text" id="task" className="bg-white max-w-70 p-2" />
                    <button type="submit" onClick={()=>{inputElem && dispatch(addTodo(inputElem))
                        setElem("")}}  className=" bg-green-400 w-18">+ADD</button>
                </label>
            </form>
        </section>
    )
}

export default AddTask