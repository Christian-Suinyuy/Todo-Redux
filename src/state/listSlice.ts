import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Todos {
    list: string[],
}

const initialState: Todos = {
    list: []
}

const  todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>)=>{
            state.list = [...state.list, action.payload]
        },

        removeTodo: (state, action: PayloadAction<number>)=>{
            state.list = state.list.filter((_, idx)=> action.payload != idx) 
        },

        updateTodo: (state, action:PayloadAction<{description:string, idx:number }>)=>{
            state.list = state.list.map((todo, idx)=>{
                if(idx === action.payload.idx)
                    return action.payload.description
                return todo
            })
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer