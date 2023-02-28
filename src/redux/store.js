
import { configureStore } from '@reduxjs/toolkit'; 

import {contactsReducer} from '../redux/contactsSlice';
import {filterReducer} from '../redux/filterSlice';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
})


export default store;


