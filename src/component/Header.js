import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import customTheme from '../styles/theme'

const styles = (customTheme) => ({
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
  main:{
    font: customTheme.typography.display3
  }
});

function HeadBar(props) {
  const { classes } = props;
  return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Hidden smDown={true} className={classes.main}>
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
