import React, { Component } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";

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

        this.minBrush = this.minBrush.bind(this);
        this.normalBrush = this.normalBrush.bind(this);

        this.previousPicture = this.previousPicture.bind(this);
        this.nextPicture = this.nextPicture.bind(this);

        this.state = {
            container: "",
            color: "#ffc600",
            width: 314,
            height: 432,
            brushRadius: 5,
            lazyRadius: 5,
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
            disabled: false,
            hideGrid: false,
            hideInterface: false,
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

    minBrush() {
        this.setState({ brushRadius: 0 });
        this.setState({ lazyRadius: 0 });
    }

    normalBrush() {
        this.setState({ brushRadius: 14 });
        this.setState({ lazyRadius: 15 });
    }

    componentDidMount() {
        const randomizer = Math.floor(Math.random() * 8);
        this.setState({ pointer: randomizer });
    }

    render() {
        console.log(this.state);

        return (
            <div>
                <div className={styles.canvasDrawing}>
                    <CanvasDraw
                        hideGrid={this.state.hideGrid}
                        disabled={this.state.disabled}
                        hideInterface={this.state.hideInterface}
                        ref={this.clicked}
                        canvasWidth={this.state.width}
                        canvasHeight={this.state.height}
                        brushColor={this.state.color}
                        brushRadius={this.state.brushRadius}
                        lazyRadius={this.state.lazyRadius}
                        loadTimeOffset={15}
                        imgSrc={this.state.imgs[this.state.pointer]}
                    />
                </div>
                <hr />
                <button onClick={() => this.previousPicture()}> Previous </button>
                <button onClick={() => this.nextPicture()}> Next </button>
                <hr />
                <button onClick={() => this.clearClicked()}>Clear</button>
                <button onClick={() => this.undoClicked()}>Undo</button>
                <button onClick={() => this.saveClicked()}>Save</button>
                <button onClick={() => this.loadClicked()}>Load</button>

                <hr />
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
                    <hr />
                </div>
                <button onClick={() => this.minBrush()}>Finished? Click before exporting</button>
                <button onClick={() => this.normalBrush()}>Changed your mind?</button>
                <button onClick={() => exportComponentAsJPEG(this.clicked)}>Export As JPEG</button>
            </div>
        );
    }
}

export default CanvasDrawing;
