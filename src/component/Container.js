import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SideBar from '../sections/SideBar';
import About from '../sections/About';
import Main from '../sections/Main';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Footer from './Footer';
import Project from '../sections/Projects';
import Skill from '../sections/Skills';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import LogoBadge from './LogoBadge';
import { Waypoint } from 'react-waypoint';

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
    backgroundColor: '#E3E3E3',
    flexGrow: 0,
    maxWidth: '16.666667%',
    flexBasis: '16.666667%',
  },
  logo: {
    flexGrow: 0,
    maxWidth: '16.666667%',
    flexBasis: '16.666667%',
  }
};

class Container extends React.Component {
  state ={
    title: 'title'
  }

  handleTitle = (newTitle) => {
    this.setState({
      title: newTitle
    })
  }

  render(){
    const { classes } = this.props;
    const { title } = this.state;

    return (
      <Grid container={true} spacing={0}>
        <Hidden mdDown>
          <Grid item={true} xs={12} lg={2} className={classes.sideBar}>
            <SideBar/>
            <LogoBadge title={title}/>
          </Grid>
        </Hidden>
        <Grid item={true} xs={12} lg={10}>
          <Main/>
          <Waypoint
            onEnter={()=>this.handleTitle('Efficient Coder')}
          />
          <About/>
          <Waypoint
            onEnter={()=>this.handleTitle('Team Player')}
          />
          <Experience/>
          <Waypoint
            onEnter={()=>this.handleTitle('Creative Thinker')}
          />
          <Project/>
          <Waypoint
            onEnter={()=>this.handleTitle('Fast Learner')}
          />
          <Skill/>
          <Waypoint
            onEnter={()=>this.handleTitle('Debugger')}
          />
          <Education/>
          <Footer/>
        </Grid>
      </Grid>
    );
  }
  
}

export default withStyles(styles)(Container);
