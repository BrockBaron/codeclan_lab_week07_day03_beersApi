import React from "react";



const BeerSelect = ({beers, updateBeerSelected}) => {

    const handleChange = function(event) {
        const chosenBeer = beers.find((beer) => {
    
            return beer.id == event.target.value;
        });
        console.log({chosenBeer})
        updateBeerSelected(chosenBeer);
    }

    const BeerList = beers.map((beer) => {
        return <option key = {beer.id} value = {beer.id}>{beer.name}</option>
    })


return (
    <>
    This is the Beer Select.
    
    <select defaultValue = "" onChange = {handleChange}>
    <option selected>Select a Beer</option>
    {BeerList}
    </select>
    </>
)

}

export default BeerSelect;