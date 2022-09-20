import { createSlice } from "@reduxjs/toolkit";

const FavReducer = createSlice({
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

export const {setItemInBook, deleteItemFromBook} = cartSlice.actions;
export default cartSlice.reducer;