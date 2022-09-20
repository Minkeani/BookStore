import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        itemsInBook: []
    },
    reducers: {
        setItemInBook: (state, action) => {
            state.itemsInBook.push(action.payload) 
    },
        deleteItemFromBook: (state, action) => {
        state.itemsInBook = state.itemsInBook.filter(game => game.id !== action.payload)
    }
}
});

export const {setItemInBook, deleteItemFromBook} = bookSlice.actions;
export default cartSlice.reducer;