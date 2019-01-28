import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import zIndex from '@material-ui/core/styles/zIndex';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const styles = {
  root: {
    height: '100%',
    backgroundColor: '#E3E3E3',
    position: 'fixed',
    zIndex: 999,
    top: 0,
    width: 'auto'
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
    backgroundColor: 'inherit',
    paddingLeft: '50px' 
  },
  title1: {
    paddingTop: '50px',
    fontFamily: '"Oxygen", sans-serif',
    fontSize: '3rem',
    fontWeight: 400,
    lineHeight: 1.04,
    letterSpacing: '0em'
  },
  title2: {
    paddingTop: '20px',
    paddingBottom: '20px'
  }
};

function SideBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <div>
          Front-end
        </div>
        <Typography variant="h5">
          UX/UI Developer
        </Typography>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(SideBar);
