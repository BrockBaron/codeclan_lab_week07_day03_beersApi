import React from "react";
import BeerContainer from "../containers/BeerContainer";


const BeerDetail = ({selectedBeers}) => {

    // if (!selectedBeers) {return null;}
    console.log(selectedBeers);

    return (
        <>
            {/* This is beer detail - test. */}
            <h1>{selectedBeers.name}</h1>
            <p>{selectedBeers.description}</p>

        </>
    )

}

export default BeerDetail;