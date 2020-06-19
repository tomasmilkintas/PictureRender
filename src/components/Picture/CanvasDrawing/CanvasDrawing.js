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
            width: 650,
            height: 462.5,
            brushRadius: 14,
            lazyRadius: 30,
            saveData: null,
            imgSrc: images[Math.floor(Math.random() * 9)],
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
                    loadTimeOffset={15}
                />

                <button onClick={() => this.clearClicked()}>Clear Canvas</button>
                <button onClick={() => this.undoClicked()}>Undo Last Action</button>
                <button onClick={() => this.saveClicked()}>Save Canvas</button>
                <button onClick={() => this.loadClicked()}>Load Canvas</button>

                <hr />
                {/* <button onClick={() => this.prevClicked()}>Previous Background</button>
                <button onClick={() => this.nextClicked()}>Next Background</button> */}
                <div>
                    <label>Brush-Radius:</label>
                    <input
                        type="number"
                        value={this.state.brushRadius}
                        onChange={(e) =>
                            this.setState({ brushRadius: parseInt(e.target.value, 10) })
                        }
                    />
                    <label>Lazy-Radius:</label>
                    <input
                        type="number"
                        value={this.state.lazyRadius}
                        onChange={(e) =>
                            this.setState({ lazyRadius: parseInt(e.target.value, 10) })
                        }
                    />

                    <label>Color Picker:</label>
                    <input
                        type="color"
                        value={this.state.color}
                        onChange={(e) => this.setState({ color: e.target.value })}
                    />
                </div>
            </div>
        );
    }
}

export default CanvasDrawing;
