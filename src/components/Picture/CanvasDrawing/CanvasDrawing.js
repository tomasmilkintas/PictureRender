import React, { Component } from "react";
import { render } from "react-dom";

import CanvasDraw from "react-canvas-draw";
// import styles from "./CanvasDrawing.module.css";

class CanvasDrawing extends Component {
    state = {
        color: "#ffc600",
        width: 400,
        height: 400,
        brushRadius: 10,
        lazyRadius: 12,
    };
    componentDidMount() {
        // let's change the color randomly every 2 seconds. fun!
        window.setInterval(() => {
            this.setState({
                color: "#" + Math.floor(Math.random() * 16777215).toString(16),
            });
        }, 2000);
    }
    render() {
        return (
            <CanvasDraw
                hideGrid
                hideInterface
                brushColor={this.state.color}
                imgSrc="https://techcrunch.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-22-at-8.43.37-AM.jpg"
            />
        );
    }
}

export default CanvasDrawing;
