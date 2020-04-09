import React, { Component } from "react";

class DrawCanvas extends Component {
  state = {
    isDrawing: false,
    lastX: 0,
    lastY: 0
  }

  canvas () {
    return document.getElementById("draw");
  }

  ctx () {
    return this.canvas().getContext("2d");
  }

  componentDidMount() {
    const canvas = this.canvas()
    const ctx = this.ctx()
    if(this.props.fullscreen === true){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    ctx.strokeStyle = "#000000";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 5;
  }

  draw = e => {
    const ctx = this.ctx();

    if(!this.state.isDrawing) return;

    ctx.beginPath();
    ctx.moveTo(this.state.lastX, this.state.lastY);
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    this.setState({
      lastX: e.nativeEvent.offsetX,
      lastY: e.nativeEvent.offsetY
    });
  }

  render() {
    return (
      <div>
        <canvas id="draw" width={this.props.width} height={this.props.height} onMouseMove={this.draw}
        onMouseDown={(e) => {
          this.setState({
            isDrawing: true,
            lastX: e.nativeEvent.offsetX,
            lastY: e.nativeEvent.offsetY
          })}
        } onMouseUp={
          () => this.setState({isDrawing: false})
        } onMouseOut={
          () => this.setState({isDrawing: false})
        }/>
      </div>
    )
  }
}

export default DrawCanvas;
