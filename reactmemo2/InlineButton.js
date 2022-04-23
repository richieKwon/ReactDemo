import React from "react";

const btnStyles = {
    color : 'white',
    backgroundColor: 'green',
    border : '1px solid red'
};

function InlineStyle() {
    return
    (<div>
        <button style={btnStyles}>Button test</button>
    </div>);
}

export default InlineStyle