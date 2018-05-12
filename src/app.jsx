import React from 'react';
import ReactDOM from "react-dom";
import Style from "./style.css"


class App extends React.Component {

    render() {
        return <div className={Style.testStyle}>Test</div>
    }
}

ReactDOM.render(<App />, document.body);
