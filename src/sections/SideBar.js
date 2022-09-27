import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    height: '100%',
    backgroundColor: '#E3E3E3',
    position: 'fixed',
    zIndex: 999,
    top: 0,
    width: 'auto',
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
    backgroundColor: 'inherit',
    paddingLeft: '50px',
  },
  title1: {
    paddingTop: '50px',
    fontFamily: '"Oxygen", sans-serif',
    fontSize: '3rem',
    fontWeight: 400,
    lineHeight: 1.04,
    letterSpacing: '0em',
  },
  title2: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
}

const SideBar = ({ classes }) => {
  return <div className={classes.root} />
}

export default withStyles(styles)(SideBar)
