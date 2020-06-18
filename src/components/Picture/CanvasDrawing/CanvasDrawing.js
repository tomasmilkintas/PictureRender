import React, { Component } from "react";
import axios from "../../../axios-orders";

import CanvasDraw from "react-canvas-draw";
import SuccessBaby from "../../../assets/success-baby.jpg";
// import styles from "./CanvasDrawing.module.css";

class CanvasDrawing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#ffc600",
            width: 400,
            height: 400,
            brushRadius: 10,
            lazyRadius: 12,
            imgSrc: SuccessBaby,
        };
    }

    getHandler = (event) => {
        event.preventDefault();
        axios
            .get("/source.json")
            .then((res) => {
                // this.setState({ imgSrc: response });

                this.setState({ imgSrc: res });
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    componentDidMount() {
        window.setInterval(() => {
            this.setState({
                color: "#" + Math.floor(Math.random() * 16777215).toString(16),
            });
        }, 2000);
    }
    render() {
        return (
            <div>
                <button onClick={this.getHandler.bind(this)}>Apply that to the canvas below</button>
                <CanvasDraw brushColor={this.state.color} imgSrc={this.state.imgSrc} />
            </div>
        );
    }
}

export default CanvasDrawing;
