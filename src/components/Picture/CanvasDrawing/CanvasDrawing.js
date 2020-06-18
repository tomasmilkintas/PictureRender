import React, { Component } from "react";
// import axios from "../../../axios-orders";

import CanvasDraw from "react-canvas-draw";
import images from "../../../assets/images";
import styles from "./CanvasDrawing.module.css";

class CanvasDrawing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#ffc600",
            width: 750,
            height: 562.5,
            brushRadius: 14,
            lazyRadius: 30,
            imgSrc: images[Math.floor(Math.random() * 6)],
        };
    }

    componentDidMount() {
        window.setInterval(() => {
            this.setState({
                color: "#" + Math.floor(Math.random() * 16777215).toString(16),
                // brushRadius: Math.floor(Math.random() * 30),
                // lazyRadius: Math.floor(Math.random() * 50),
            });
        }, 2000);
    }
    render() {
        return (
            <div>
                <CanvasDraw
                    canvasWidth={this.state.width}
                    canvasHeight={this.state.height}
                    className={styles.CanvasDrawing}
                    brushColor={this.state.color}
                    brushRadius={this.state.brushRadius}
                    lazyRadius={this.state.lazyRadius}
                    imgSrc={this.state.imgSrc}
                />
            </div>
        );
    }
}

export default CanvasDrawing;
