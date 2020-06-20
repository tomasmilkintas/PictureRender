import React, { Component } from "react";

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

        this.previousPicture = this.previousPicture.bind(this);
        this.nextPicture = this.nextPicture.bind(this);

        this.state = {
            color: "#ffc600",
            width: 750,
            height: 562.5,
            brushRadius: 14,
            lazyRadius: 30,
            saveData: null,
            imgSrc: "",
            pointer: "",
            imgs: [
                images[0],
                images[1],
                images[2],
                images[3],
                images[4],
                images[5],
                images[6],
                images[7],
                images[8],
            ],
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

    nextPicture() {
        if (this.state.pointer === this.state.imgs.length) {
            this.setState({ pointer: 0 });
            this.clicked.current.drawImage();
        } else {
            this.setState({ pointer: this.state.pointer + 1 });
            this.clicked.current.drawImage();
        }
    }
    previousPicture() {
        if (this.state.pointer === 0) {
            this.setState({ pointer: 8 });
            this.clicked.current.drawImage();
        } else {
            this.setState({ pointer: this.state.pointer - 1 });
            this.clicked.current.drawImage();
        }
    }

    componentDidMount() {
        const randomizer = Math.floor(Math.random() * 8);
        this.setState({ pointer: randomizer });
    }

    render() {
        console.log(this.state);

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
                    loadTimeOffset={15}
                    imgSrc={this.state.imgs[this.state.pointer]}
                />

                <button onClick={() => this.clearClicked()}>Clear Canvas</button>
                <button onClick={() => this.undoClicked()}>Undo Last Action</button>
                <button onClick={() => this.saveClicked()}>Save Canvas</button>
                <button onClick={() => this.loadClicked()}>Load Canvas</button>

                <hr />
                <button onClick={() => this.previousPicture()}>Previous Background</button>
                <button onClick={() => this.nextPicture()}>Next Background</button>
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
