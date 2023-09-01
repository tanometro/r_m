export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = 'FILTER'
export const SORT = 'SORT'

// export const addFav = (character) => {
//    const endpoint = 'http://localhost:3001/rickandmorty/fav';
//    return (dispatch) => {
//       axios.post(endpoint, character).then(({ data }) => {
//          return dispatch({
//             type: 'ADD_FAV',
//             payload: data,
//          });
//       });
//    };
// };

export const addFav = async (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   try{
      const data = await axios.post(endpoint, character)
      return ({
         type: 'ADD_FAV',
         payload: data,
      });
   }
   catch(error){
      window.alert("No se pudo crear el gente")
   }
}

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