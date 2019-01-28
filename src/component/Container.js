import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideBar from '../sections/SideBar'
import About from '../sections/About'
import Main from '../sections/Main'
import Experience from '../sections/Experience'
import Project from '../sections/Projects'
import Skill from '../sections/Skills'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

const styles = {
  root: {
    flexGrow: 1,
    paddingTop: '100px',
    paddingBottom: '100px',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },
  sideBar: {
    backgroundColor: '#E3E3E3'
  }
};

function Container(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container={true} spacing={0}>
        <Hidden mdDown>
          <Grid item={true} lg={2} className={classes.sideBar}>
            <SideBar/>
          </Grid>
        </Hidden>
        <Grid item={true} xs={12} lg={10}>
          <Main/>
          <About/>
          <Experience/>
          <Project/>
          <Skill/>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Container);
