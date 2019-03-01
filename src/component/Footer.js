import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <AppBar position="sticky" className={classes.appBar} elevation={0}>
        Footer
      </AppBar>
  );
}

export default withStyles(styles)(Footer);
