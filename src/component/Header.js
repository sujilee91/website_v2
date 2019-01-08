import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#484848',
    alignItems: 'center'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBar: {
    width: '1200px',
    justifyContent: 'flex-end'
  }
};

function HeadBar(props) {
  const { classes } = props;
  return (
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">EXPEIENCE</Button>
          <Button color="inherit">WORK</Button>
          <Button color="inherit">CONTACT</Button>
        </Toolbar>
      </AppBar>
  );
}

export default withStyles(styles)(HeadBar);
