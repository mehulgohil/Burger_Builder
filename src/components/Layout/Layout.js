import React,{ Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state={
        sideDrawer: false
    }

    sideDrawerClosedHandler = () =>{
        this.setState({sideDrawer:false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState)=> {
            return{sideDrawer:!prevState.sideDrawer};
        });
    }

    render(){
        return(
        <Aux>
            <Toolbar opened={this.sideDrawerToggleHandler} />
            <SideDrawer show={this.state.sideDrawer} closed={this.sideDrawerClosedHandler} />
            <main className={classes.Content}>{this.props.children}</main>
        </Aux>)
    }
}

export default Layout;