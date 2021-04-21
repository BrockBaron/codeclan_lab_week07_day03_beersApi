import React, {useState, useEffect} from "react";
import BeerSelect from "../components/BeerSelect";
import BeerDetail from "../components/BeerDetail";

const BeerContainer = () => {

    const [beers, setBeers] = useState([]);
    const [selectedBeers, setSelectedBeer] = useState(null);

    const fetchBeers = function() {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then (beers => setBeers(beers))
    } 

    const updateBeerSelected = function(newBeer) {
        setSelectedBeer(newBeer);
        
    }

    useEffect(() => {
        fetchBeers();
    }, [])

    // const BeerList = beers.map((beer) => {
    //     return <li>{beer.name}</li>
    // })

return (
    <>
    
    This is a beer container.
    <p>< BeerSelect beers = {beers} updateBeerSelected = {updateBeerSelected} /></p>

    {/* {selectedBeers? selectedBeers.name  : null } */}
    {selectedBeers? < BeerDetail selectedBeers={selectedBeers} /> : null }
    {/* {selectedBeers.name} */}

        {/* {BeerList} */}
        

    </>
)

}

export default BeerContainer;

