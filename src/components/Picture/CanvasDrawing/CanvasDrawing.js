import React, { Component } from "react";
// import axios from "../../../axios-orders";

import CanvasDraw from "react-canvas-draw";
import images from "../../../assets/images";
import styles from "./CanvasDrawing.module.css";

class CanvasDrawing extends Component {
    constructor(props) {
        super(props);
        this.clicked = React.createRef(null);
        this.clearClicked = this.clearClicked.bind(this);
        this.undoClicked = this.undoClicked.bind(this);
        this.saveClicked = this.saveClicked.bind(this);
        this.loadClicked = this.loadClicked.bind(this);
        // this.prevClicked = this.prevClicked.bind(this);
        // this.nextClicked = this.nextClicked.bind(this);

        this.state = {
            color: "#ffc600",
            width: 550,
            height: 362.5,
            brushRadius: 14,
            lazyRadius: 30,
            imgSrc: images[Math.floor(Math.random() * 6)],
            saveData: null,
        };
    }

    clearClicked = () => {
        this.clicked.current.clear();
    };
    undoClicked = () => {
        this.clicked.current.undo();
    };
    saveClicked = () => {
        localStorage.setItem("savedDrawing", this.clicked.current.getSaveData());
    };
    loadClicked = () => {
        this.clicked.current.loadSaveData(localStorage.getItem("savedDrawing"));
    };

    // prevClicked = () => {};

    // nextClicked = () => {};

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
                    ref={this.clicked}
                    canvasWidth={this.state.width}
                    canvasHeight={this.state.height}
                    className={styles.CanvasDrawing}
                    brushColor={this.state.color}
                    brushRadius={this.state.brushRadius}
                    lazyRadius={this.state.lazyRadius}
                    imgSrc={this.state.imgSrc}
                />

                <button onClick={() => this.clearClicked()}>Clear Canvas</button>
                <button onClick={() => this.undoClicked()}>Undo Last Action</button>
                <button onClick={() => this.saveClicked()}>Save Canvas</button>
                <button onClick={() => this.loadClicked()}>Load Canvas</button>
                <hr />
                {/* <button onClick={() => this.prevClicked()}>Previous Background</button>
                <button onClick={() => this.nextClicked()}>Next Background</button> */}
            </div>
        );
    }
}

export default CanvasDrawing;
