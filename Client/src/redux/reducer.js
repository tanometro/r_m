const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
<<<<<<< HEAD
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
=======
            return { 
                ...state, 
                myFavorites: payload, allCharacters: payload };
>>>>>>> 731138501a9910e52c79ec1bf37172a714fd4c7f
        case 'REMOVE_FAV':
            return { 
                ...state, 
                myFavorites: payload };
        case 'FILTER':
            return {
                ...state,
                favs: state.allCharacters.filter((fav) => fav.gender === action.payload)
            }
        case 'SORT':
        let sorted
            if(action.payload === 'A') {
                sorted = state.allCharacters.sort((a, b) => a.id > b.id ? 1 : -1)
            } else if(action.payload === 'D'){
                sorted = state.allCharacters.sort((a, b) => a.id < b.id ? 1 : -1)
            } else {
                sorted = state.allCharacters
            }
            return {
                ...state,
                favs: [...sorted]
            }
        default:
            return state
    }
}

export default reducer