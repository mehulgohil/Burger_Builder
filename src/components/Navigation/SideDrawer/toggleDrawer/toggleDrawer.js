import React from 'react';

import classes from './toggleDrawer.module.css';

const drawerToggle = (props) => (
    <div className={classes.ToggleDrawer} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;