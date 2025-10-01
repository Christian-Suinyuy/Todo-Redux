import { useState } from "react"
// import { removeTodo} from "./state/listSlice"
// import { useDispatch } from "react-redux"
import { doc, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "./firebase"

type Details = {
    description: string,
    id: string,
    completed:boolean
}

function Card(details: Details){
    let [current, setCurent] = useState<string>(details?.description)
    let [toEdit, setbuttons] = useState<boolean>(false)

    const updateDes = async (des:string)=>{
        console.log("got in", details.id)
        const userRef = doc(db, "tasks", `${details.id}`);
        await updateDoc(userRef, {
        description: des
        });
        console.log("description updated successfully!");
        location.reload()
    }
    const updateState = async (state:boolean)=>{
        console.log("got in", details.id)
        const userRef = doc(db, "tasks", `${details.id}`); 
        await updateDoc(userRef, {
        completed: state
        });
        console.log("state updated successfully!");
        location.reload()
    }

    const deleteTodo = async ()=>{
        console.log("got in", details.id)
        const userRef = doc(db, "tasks", `${details.id}`);
        await deleteDoc(userRef);
        console.log("state updated successfully!");
        location.reload()
    }

    
    // const dispatch = useDispatch()
    return (
        <section className={`grid gap-2 grid-cols-[.1fr_2fr_.5fr] ${details.completed ? "line-through opacity-50": ""} bg-blue-900 text-white items-center mx-3 p-2`}>
            <span onClick={()=>{}}  className={` border w-4 h-4 rounded-full ${details.completed && "bg-green-500"}`}></span>
            <textarea  readOnly= {!toEdit ? true : false} value={current} 
                onChange={(e)=>(setCurent(e.target.value))} 
                className={`${toEdit ? "bg-slate-100 text-black" : ""} focus:outline-0 text-center`}> </textarea>
            <div id="buttons" className="">
                <div className={`${toEdit ? "hidden": "flex"} gap-7`}>
                    <button className="rounded bg-blue-950 px-4 " onClick={()=> deleteTodo()} > Delete</button> 
                    <button onClick={()=>setbuttons(b=>b= !b)} className="rounded bg-blue-950 px-4" > Edit</button> 
                    <button onClick={()=> updateState(!details.completed)} className="rounded bg-blue-950 px-4" > Done</button> 

                </div>
                <div className={`alternative  justify-around ${toEdit ? "flex" : "hidden"}`}>
                    <button className="rounded bg-blue-950 px-2 " onClick={()=> {
                        setCurent(details.description)
                        setbuttons( b=> b= !b )}} > cancel</button> 
                    <button className="rounded bg-blue-950 px-2" onClick={()=>{
                        updateDes(current)
                        setbuttons( b=> b= !b )
                    }}> save</button> 
                </div>
            </div>
        </section>
    )
}

export default Card