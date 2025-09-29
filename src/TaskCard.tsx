import { useState } from "react"
import { removeTodo, updateTodo, markAsDone } from "./state/listSlice"
import { useDispatch } from "react-redux"

type Details = {
    description: string,
    id: number,
    completed:boolean
}

function Card(details: Details){
    let [current, setCurent] = useState<string>(details?.description)
    let [toEdit, setbuttons] = useState<boolean>(false)
    console.log({...details})

    const dispatch = useDispatch()
    return (
        <section className={`grid gap-2 grid-cols-[.1fr_2fr_.5fr] ${details.completed ? "line-through opacity-50": ""} bg-blue-900 text-white items-center mx-3 p-2`}>
            <span onClick={()=> dispatch((markAsDone(details.id)))}  className={` border w-4 h-4 rounded-full ${details.completed && "bg-green-500"}`}></span>
            <textarea  readOnly= {!toEdit ? true : false} value={current} 
                onChange={(e)=>(setCurent(e.target.value))} 
                className={`${toEdit ? "bg-slate-100 text-black" : ""} focus:outline-0 text-center`}> </textarea>
            <div id="buttons" className="">
                <div className={`${toEdit ? "hidden": "flex"} gap-7`}>
                    <button className="rounded bg-blue-950 px-4 " onClick={()=> dispatch(removeTodo(details.id))} > Delete</button> 
                    <button onClick={()=> setbuttons(b=> !b)} className="rounded bg-blue-950 px-4" > Edit</button> 
                    <button onClick={()=> dispatch((markAsDone(details.id)))} className="rounded bg-blue-950 px-4" > Done</button> 

                </div>
                <div className={`alternative  justify-around ${toEdit ? "flex" : "hidden"}`}>
                    <button className="rounded bg-blue-950 px-2 " onClick={()=> {
                        setCurent(details.description)
                        setbuttons( b=> b= !b )}} > cancel</button> 
                    <button className="rounded bg-blue-950 px-2" onClick={()=>{
                        dispatch(updateTodo({description:current,idx: details.id}))
                        setbuttons( b=> b= !b )
                    }}> save</button> 
                </div>
            </div>
        </section>
    )
}

export default Card