import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


class App extends Component {
   constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    return (
      <div className="App">
         <AppBar
            title="Wubba lubba dub dub!"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
         />
         <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={(open) => this.setState({open})}
         >
            <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
