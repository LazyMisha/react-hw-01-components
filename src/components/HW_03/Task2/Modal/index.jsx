import React, { Component } from "react";
import styles from "./styles.module.scss";

class Modal extends Component {
  handleCloseModal = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModal);
  }

  render() {
    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
