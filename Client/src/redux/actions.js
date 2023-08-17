export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = 'FILTER';
export const SORT = 'SORT';
import axios from "axios";

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
 };
 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };

export const filter = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const sort = (orden) => {
    return {
        type: SORT,
        payload: orden
    }
}