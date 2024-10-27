import Reeact from "react";

const Drawing = (props) => {
    return (
        <div>
            {["Place to draw", props.draw, "with", props.how].join(" ")}
        </div>
    )
}

export default Drawing