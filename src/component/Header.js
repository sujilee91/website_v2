import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import theme from '../styles/theme'
import IconButton from '@material-ui/core/IconButton';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#484848',
    alignItems: 'flex-end'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBar: {
    justifyContent: 'flex-end',
    padding: '5px',
    marginRight: '20px'
  },
});

function HeadBar(props) {
  const { classes } = props;
  return (
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Hidden smDown={true} style={theme.typography.display3}>
            <Button color="inherit"> ABOUT </Button>
            <Button color="inherit"> EXPERIENCE </Button>
            <Button color="inherit"> WORK </Button>
            <Button color="inherit">CONTACT</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
  );
}

export default withStyles(styles)(HeadBar);
