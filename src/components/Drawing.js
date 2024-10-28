import React, { useEffect, useRef } from "react";
import * as d3 from "d3" ;

const Drawing = (props) => {

    const drawingSvg = useRef();

    useEffect(() => {
        const svg = d3.select(drawingSvg.current); // generating selection

        svg.selectChildren().remove();

        if (props.draw === "circles")
            for (let i = 1; i <= 3; i++)
                svg.append("circle")
                    .attr("cx", i * 30)
                    .attr("cy", 30)
                    .attr("r", 10)
        else
            for (let i = 1; i <= 3; i++)
                svg.append("rect")
                    .attr("x", i * 30)
                    .attr("y", 30)
                    .attr("width", 20)
                    .attr("height", 20)
    })

    return (
        <div>
            {["Place to draw", props.draw, "with", props.how].join(" ")}
            <svg ref={drawingSvg}></svg>
        </div>
    )
}

export default Drawing