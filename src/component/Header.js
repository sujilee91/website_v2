import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import customTheme from '../styles/theme'
import * as Scroll from 'react-scroll'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

const styles = (customTheme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#484848',
    alignItems: 'flex-end',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBar: {
    justifyContent: 'flex-end',
    padding: '5px',
    marginRight: '20px',
    [customTheme.breakpoints.down('md')]: {
      marginRight: '0px',
    },
  },
  main: {
    font: customTheme.typography.subtitle2,
  },
  title: {
    position: 'absolute',
    maxWidth: '100%',
    maxHeight: '500%',
    left: '0px',
  },
  badgeWrapper: {
    zIndex: 1300,
    height: 'auto',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    flexGrow: 0,
    maxWidth: '16.666667%',
    flexBasis: '16.666667%',
    width: '100%',
    top: '0px',
    [customTheme.breakpoints.down('md')]: {
      maxWidth: '100%',
      minWidth: '100%',
      paddingTop: 0,
    },
  },
  badge: {
    height: 'auto',
    margin: 'auto',
    [customTheme.breakpoints.down('md')]: {
      width: '60%',
    },
    [customTheme.breakpoints.down('sm')]: {
      width: '70%',
      float: 'right',
    },
  },
  titleGrid: {
    position: 'relative',
  },
  names: {
    zIndex: 99999,
    position: 'absolute',
    left: '30px',
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 'auto',
    width: 'auto',
  },
})

const HeadBar = ({ classes }) => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Hidden smDown={true} className={classes.main}>
          <Button
            color="inherit"
            onClick={() => {
              scroller.scrollTo('About', {
                duration: 1000,
                delay: 100,
                smooth: true,
                offset: -50,
              })
            }}
          >
            {' '}
            ABOUT{' '}
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              scroller.scrollTo('Experience', {
                duration: 1000,
                delay: 100,
                smooth: true,
                offset: -50,
              })
            }}
          >
            {' '}
            EXPERIENCE{' '}
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              scroller.scrollTo('Project', {
                duration: 1000,
                delay: 100,
                smooth: true,
                offset: -50,
              })
            }}
          >
            {' '}
            PROJECT + SKILLS{' '}
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              scroller.scrollTo('Contact', {
                duration: 1000,
                delay: 100,
                smooth: true,
                offset: -50,
              })
            }}
          >
            CONTACT
          </Button>
        </Hidden>
        {/* <Hidden mdUp={true} smDown={true}>
                <div className={classes.badgeWrapper}>
                  <img src="./LeeTitleWide.png" alt="title" className={classes.badge}/>
                  <span key={props.title} className="title"> {props.title} </span>
                </div>
              </Hidden> */}
        <Hidden smUp={true}>
          <Button
            variant="text"
            color="inherit"
            className={classes.badgeWrapper}
            onClick={() => {
              setOpenMenu(!openMenu)
            }}
          >
            <img
              src="./LeeTitleWide.png"
              alt="title"
              className={classes.badge}
            />
          </Button>
          <SwipeableDrawer
            anchor="top"
            open={openMenu}
            onClose={() => {
              setOpenMenu(false)
            }}
            onOpen={() => {
              setOpenMenu(true)
            }}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={() => {
                setOpenMenu(false)
              }}
              onKeyDown={() => {
                setOpenMenu(false)
              }}
            >
              <List>
                <ListItem
                  button
                  key="About"
                  onClick={() => {
                    scroller.scrollTo('About', {
                      duration: 1000,
                      delay: 100,
                      smooth: true,
                      offset: -50,
                    })
                  }}
                >
                  <Typography variant={'button'}>About</Typography>
                </ListItem>
                <Divider />
                <ListItem
                  button
                  key="exp"
                  onClick={() => {
                    scroller.scrollTo('Experience', {
                      duration: 1000,
                      delay: 100,
                      smooth: true,
                      offset: -100,
                    })
                  }}
                >
                  <Typography variant={'button'}>Experience</Typography>
                </ListItem>
                <Divider />
                <ListItem
                  button
                  key="project"
                  onClick={() => {
                    scroller.scrollTo('Project', {
                      duration: 1000,
                      delay: 100,
                      smooth: true,
                      offset: -100,
                    })
                  }}
                >
                  <Typography variant={'button'}>Project + Skills</Typography>
                </ListItem>
                <Divider />
                <ListItem
                  button
                  key="edu"
                  onClick={() => {
                    scroller.scrollTo('Contact', {
                      duration: 1000,
                      delay: 100,
                      smooth: true,
                      offset: -100,
                    })
                  }}
                >
                  <Typography variant={'button'}>Contact</Typography>
                </ListItem>
              </List>
            </div>
          </SwipeableDrawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(HeadBar)
