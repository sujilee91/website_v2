import React from 'react'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import '../styles/Header.css'
import theme from '../styles/theme'

const styles = (theme) => ({
  root: {
    backgroundColor: '#484848',
    marginTop: theme.typography.pxToRem(100),
    padding: theme.typography.pxToRem(20),
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
    top: '-30px',
    [theme.breakpoints.down('md')]: {
      top: '-60px',
    },
  },
  badge: {
    height: '380px',
    width: 'auto',
  },
})

const LogoBadge = ({ classes, title }) => {
  return (
    <div className={classes.badgeWrapper}>
      <img src="./LeeTitle.svg" alt="title" className={classes.badge} />
      <span key={title} className="title">
        {' '}
        {title}{' '}
      </span>
    </div>
  )
}

export default withStyles(styles)(LogoBadge)
