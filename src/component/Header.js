import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import customTheme from '../styles/theme'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

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
            <Button color="inherit" onClick={()=>{ 
              scroller.scrollTo('About', {
                duration: 1000,
                delay: 100,
                smooth: true,
                offset: -50
              })}}> ABOUT </Button>
            <Button color="inherit" onClick={()=>{ 
              scroller.scrollTo('Experience', {
                duration: 1000,
                delay: 100,
                smooth: true,
                offset: -50
              })}}> EXPERIENCE </Button>
            <Button color="inherit" onClick={()=>{ 
              scroller.scrollTo('Project', {
                duration: 1000,
                delay: 100,
                smooth: true,
                offset: -50
              })}}> PROJECT + SKILLS </Button>
            <Button color="inherit" onClick={()=>{ 
              scroller.scrollTo('Contact', {
                duration: 1000,
                delay: 100,
                smooth: true,
                offset: -50
              })}}>CONTACT</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
  );
}

export default withStyles(styles)(HeadBar);
