import React from 'react'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../styles/theme'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '50px',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
    backgroundColor: 'inherit',
    padding: '25px 25px 0 25px',
    marginTop: theme.typography.pxToRem(100),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.typography.pxToRem(20),
      textAlign: 'center',
    },
  },
  title1: {
    color: '#484848',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(70),
    },
  },
  title2: {
    paddingTop: '15px',
    marginBottom: '35px',
    paddingLeft: '5px',
    color: '#B7B8BA',
  },
  divider: {
    maxWidth: '80%',
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
    },
  },
  iconMargin: {
    margin: '10px',
    backgroundColor: 'white',
    boxShadow: 'none',
    fontSize: '18px',
  },
  iconMarginRight: {
    marginRight: '10px',
    backgroundColor: 'white',
    boxShadow: 'none',
    fontSize: '18px',
  },
  iconContainer: {
    marginTop: '30px',
    marginBottom: '20px',
  },
  img: {
    width: theme.typography.pxToRem(330),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.typography.pxToRem(50),
    },
    display: 'block',
    margin: 'auto',
  },
})

const Main = ({ classes }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container={true} spacing={0} className={classes.container}>
          <Grid item={true} xs={12} sm={6}>
            <Typography variant="h1" className={classes.title1}>
              SU JI LEE
            </Typography>
            <Typography variant="h3" className={classes.title2}>
              Frontend UX / UI Engineer
            </Typography>
            <Divider className={classes.divider} />
            <div className={classes.iconContainer}>
              <IconButton
                color="primary"
                className={classes.iconMarginRight}
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/sujilee91/',
                    '_blank',
                  )
                }
              >
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </IconButton>
              <IconButton
                color="primary"
                className={classes.iconMargin}
                onClick={() =>
                  window.open('https://github.com/sujilee91', '_blank')
                }
              >
                <FontAwesomeIcon icon={['fab', 'github-alt']} />
              </IconButton>
              <IconButton
                color="primary"
                className={classes.iconMargin}
                onClick={() =>
                  window.open(
                    'https://www.instagram.com/sujilee_anderson/',
                    '_blank',
                  )
                }
              >
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </IconButton>
              <IconButton
                color="primary"
                className={classes.iconMargin}
                onClick={() =>
                  window.open('https://dribbble.com/sujilee91', '_blank')
                }
              >
                <FontAwesomeIcon icon={['fab', 'dribbble']} />
              </IconButton>
            </div>
            <Typography variant="body1">
              Frontend UX / UI Engineer with 5+ years of experience. <br />
              <br />
              Strong understanding and passion in creative, clean, and
              responsive design with user experience in web/mobile development.
            </Typography>
          </Grid>
          <Grid item={true} xs={12} sm={6}>
            <img className={classes.img} src="./profile.png" alt="SJLEE" />
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(Main)
