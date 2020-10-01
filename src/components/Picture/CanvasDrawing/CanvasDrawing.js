import React, { Component } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";

import CanvasDraw from "react-canvas-draw";
import styles from "./CanvasDrawing.module.css";
import { images } from "../../../assets/images";

import BrushIcon from "@material-ui/icons/Brush";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import GestureIcon from "@material-ui/icons/Gesture";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";

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
            brushRadius: 12,
            lazyRadius: 12,
            saveData: null,
            imgSrc: "",
            pointer: 0,
            imgs: [...images],
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
        if (this.state.pointer === this.state.imgs.length - 1) {
            this.setState({ pointer: 0 });
            this.clicked.current.drawImage();
        } else {
            this.setState({ pointer: this.state.pointer + 1 });
            this.clicked.current.drawImage();
        }
    }
    previousPicture() {
        if (this.state.pointer < 0) {
            this.setState({ pointer: this.state.imgs.length - 1 });
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

    // componentDidMount() {
    //     const randomizer = Math.floor(Math.random() * (this.state.imgs.length - 1));
    //     this.setState({ pointer: randomizer });
    // }

    render() {
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

                <div className={styles.Buttons}>
                    <div className={styles.Group}>
                        <button onClick={() => this.clearClicked()}>
                            <HighlightOffIcon />
                        </button>
                        <button onClick={() => this.previousPicture()}>
                            {" "}
                            <ArrowBackIosOutlined />{" "}
                        </button>
                        <button onClick={() => this.nextPicture()}>
                            {" "}
                            <ArrowForwardIosOutlined />{" "}
                        </button>
                        <button onClick={() => this.undoClicked()}>
                            <SettingsBackupRestoreIcon />
                        </button>
                    </div>

                    <div className={styles.Group}>
                        <FormatColorFillIcon />
                        <input
                            type="color"
                            value={this.state.color}
                            onChange={(e) => this.setState({ color: e.target.value })}
                        />
                    </div>
                    <div className={styles.Group}>
                        <label>
                            <BrushIcon />
                        </label>
                        <input
                            type="number"
                            value={this.state.brushRadius}
                            onChange={(e) =>
                                this.setState({ brushRadius: parseInt(e.target.value, 10) })
                            }
                        />
                        <label>
                            <GestureIcon />
                        </label>
                        <input
                            type="number"
                            value={this.state.lazyRadius}
                            onChange={(e) =>
                                this.setState({ lazyRadius: parseInt(e.target.value, 10) })
                            }
                        />
                    </div>

                    <div>
                        <button onClick={() => exportComponentAsJPEG(this.clicked)}>
                            <SaveAltIcon />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CanvasDrawing;
