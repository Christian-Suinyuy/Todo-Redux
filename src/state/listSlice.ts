import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface todo{
    description: string,
    completed: boolean,
    subTaks?: {
        description: string,
        completed: boolean,   
    }
}
interface Todos {
    list: todo[],
}

const loaded = (localStorage.getItem("reduxTodo")) || ""

const initialState: Todos = {
    list: []
}

if (loaded)
    initialState.list = [...JSON.parse(loaded).list]

function saveToStorge(param:Todos){
    localStorage.setItem("reduxTodo",JSON.stringify(param))
}

const  todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<todo>)=>{
            state.list = [...state.list, action.payload]
            saveToStorge(state)
        },

        removeTodo: (state, action: PayloadAction<number>)=>{
            state.list = state.list.filter((_, idx)=> action.payload != idx) 
            saveToStorge(state)
        },

        updateTodo: (state, action:PayloadAction<{description:string, idx:number }>)=>{
            state.list = state.list.map((todo, idx)=>{
                if(idx === action.payload.idx)
                    todo.description = action.payload.description
                return todo
            })
            saveToStorge(state)
        },

        markAsDone: (state, action: PayloadAction<number>)=>{
            state.list = state.list.map((todo:todo, idx:number )=> {
                if (idx === action.payload)
                    return {...todo, completed: !todo.completed }
                return todo
            })
            saveToStorge(state)
        }
    }
})

export const {addTodo, removeTodo, updateTodo, markAsDone} = todoSlice.actions
export default todoSlice.reducer