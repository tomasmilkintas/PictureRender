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
        window.setInterval(() => {
            this.setState({
                color: "#" + Math.floor(Math.random() * 16777215).toString(16),
            });
        }, 2000);
    }
    render() {
        return <CanvasDraw brushColor={this.state.color} imgSrc="" />;
    }
}

export default CanvasDrawing;
