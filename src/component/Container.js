import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import About from '../sections/About'
import Main from '../sections/Main'
import Experience from '../sections/Experience'
import Education from '../sections/Education'
import Footer from './Footer'
import Project from '../sections/Projects'
import Skill from '../sections/Skills'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import LogoBadge from './LogoBadge'
import { Waypoint } from 'react-waypoint'

const styles = {
  root: {
    flexGrow: 1,
    paddingTop: '100px',
    paddingBottom: '100px',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
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
  },
}

const Container = ({ classes }) => {
  const [title, setTitle] = useState('title')

  const handleTitle = (newTitle) => {
    setTitle(newTitle)
  }

  return (
    <Grid container={true} spacing={0}>
      <Hidden smDown>
        <Grid item={true} xs={12} md={2} className={classes.sideBar}>
          <LogoBadge title={title} />
        </Grid>
      </Hidden>
      <Grid item={true} xs={12} md={10}>
        <Main />
        <Waypoint onEnter={() => handleTitle('Efficient Coder')} />
        <About />
        <Waypoint onEnter={() => handleTitle('Team Player')} />
        <Experience />
        <Waypoint onEnter={() => handleTitle('Creative Thinker')} />
        <Project />
        <Waypoint onEnter={() => handleTitle('Fast Learner')} />
        <Skill />
        <Waypoint onEnter={() => handleTitle('Communicator')} />
        <Education />
        <Footer />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Container)
