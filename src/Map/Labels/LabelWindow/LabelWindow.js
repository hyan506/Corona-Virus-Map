import React from 'react';
import {BaseControl} from 'react-map-gl';
import classes from './LabelWindow.module.css'
class LabelWindow extends BaseControl {
  _render() {
    const {longitude, latitude} = this.props;

    const [x, y] = this._context.viewport.project([longitude, latitude]);

    const markerStyle = {
      left: x,
      top: y
    };

    return (
      <div ref={this._containerRef}
        className={classes.LabelWindow}
        style={markerStyle} >
            {this.props.cases}
        <div className ={classes.WindowContent}>{this.props.children}</div>
      </div>
    );
  }
}

export default LabelWindow;