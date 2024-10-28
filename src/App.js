import { useEffect, useRef } from 'react';
import './App.css';
import movie from "./json/movie.json";
import * as d3 from "d3";

function App() {
    const scatterplotRef = useRef();

    useEffect(() => {
        movie.forEach(d => {
            d.us_gross = parseFloat(d.us_gross);
            d.rotten_rating = parseFloat(d.rotten_rating);
        });

        


        d3.select(scatterplotRef.current)
        .selectAll('circle')
        .data(movie)
        .enter()
        .append('circle')
        .attr('r', 3.5)
        .attr('cx', d => d.rotten_rating * 5)
        .attr('cy', d => d.us_gross / 5);

    });

    return (
        <div className='App'>
            <svg ref={scatterplotRef} width={1000} height={1000}></svg>
        </div>
    );
}

export default App;