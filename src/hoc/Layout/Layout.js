import React, { Component } from "react";

import Aux from "../Aux/Aux";
// import styles from "./Layout.module.css";
import PictureRender from "../../containers/PictureRender/PictureRender";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar />
                <PictureRender />
            </Aux>
        );
    }
}

export default Layout;
