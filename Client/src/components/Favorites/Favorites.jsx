import Card from "../cards/Card";
import { connect, useDispatch } from "react-redux";
import { removeFav, addFav, filter, sort } from "../../redux/actions.js";
import { useState } from "react";



export function Favorites({favorites}) {
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleOrder = (e) => {
        dispatch(sort(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(filter(e.target.value))
    }

    return (
        <div>
        
        <select onChange={handleOrder}>
            <option value="Default">Default</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>

            {
                favorites.map((fav) => (
                    <Card
                        key={fav.id}
                        name={fav.name}
                        status={fav.status}
                        species={fav.species}
                        gender={fav.gender}
                        origin={fav.origin}
                        image={fav.image}
                        id={fav.id}
                    />
                ))
            }
        </div>
    )
   
}

export function mapStateToProps(state) {
    return {
        favorites: state.favs
    }
}

export default connect(mapStateToProps, null)(Favorites)