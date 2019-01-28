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
    alignItems: 'center',
    minHeight: '250px',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBar: {
    width: '1200px',
    justifyContent: 'flex-end',
    padding: '5px'
  }
};

function Footer(props) {
  const { classes } = props;
  return (
      <AppBar position="sticky" className={classes.appBar} elevation={0}/>
  );
}

export default withStyles(styles)(Footer);
