import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    const message: string = 'Hello, World!';

    return (
        <h1>
            {message}
        </h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));

