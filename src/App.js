import { useEffect, useRef } from 'react';
import './App.css';
import movie from "./json/movie.json";
import * as d3 from "d3";

function App() {
    const scatterplotRef = useRef();

    let width = 500;
    let height = 500;
    let margin = 20;

    useEffect(() => {
        movie.forEach(d => {
            d.us_gross = parseFloat(d.us_gross);
            d.rotten_rating = parseFloat(d.rotten_rating);
        });

        let xScale = d3.scaleLinear()
                       .domain([
                        d3.min(movie, d => d.rotten_rating),
                        d3.max(movie, d => d.rotten_rating),
                       ])
                       .range([0, width]);

        let yScale = d3.scaleLinear()
                        .domain([
                        d3.min(movie, d => d.us_gross),
                        d3.max(movie, d => d.us_gross),
                        ])
                        .range([height, 0]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);
        const svg = d3.select(scatterplotRef.current);

        svg.append('g')
           .attr('transform', `translate(${margin}, ${height + margin})`)
           .call(xAxis);
        
        svg.append('g')
           .attr('transform', `translate(${margin}, ${margin})`)
           .call(yAxis);

        const colorScale = d3.scaleOrdinal()
                             .domain(['전체관람가', '7세이상', '15세이상', '19세이상'])
                             .range(['#3366cc', '#109618', '#ff9900', '#dc3912']);
                        
        svg.append('g')
            .attr('transform', `translate(${margin}, ${margin})`)
            .selectAll('circle')
            .data(movie)
            .enter()
            .append('circle')
            .attr('r', 3.5)
            .attr('cx', d => xScale(d.rotten_rating))
            .attr('cy', d => yScale(d.us_gross))
            .attr('fill', d => colorScale(d.rating))
    });

    return (
        <div className='App'>
            <svg ref={scatterplotRef} 
                width={width + 2 * margin} 
                height={height + 2 * margin}>
            </svg>
        </div>
    );
}

export default App;