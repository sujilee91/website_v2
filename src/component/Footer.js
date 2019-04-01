import React from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography } from '@material-ui/core';
import Title from '../component/Title'
import theme from '../styles/theme'

const styles = (theme) => ({
  root: {
    backgroundColor: '#484848',
    marginTop: theme.typography.pxToRem(100),
    padding: theme.typography.pxToRem(20),
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBar: {
    width: '1200px',
    justifyContent: 'flex-end',
    padding: '5px'
  },
  title: {
    color: 'white',
    textTransform: 'uppercase',
  },
  contact: {
    fontFamily: 'Oxygen',
    fontSize: '18px',
    display: 'block',
    color: 'white',
    paddingTop: '15px'
  },
  iconContainer: {
    marginTop: '30px',
    marginBottom: '20px'
  },
  iconMargin: {
    margin: '10px',
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  iconMarginRight: {
    marginRight: '10px',
    backgroundColor: 'white',
    boxShadow: 'none'
  },
});

function Footer(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
    <div className={classes.root} name="Contact">
      <Typography variant="h2" className={classes.title}>
        Got Question?
      </Typography>
      <div className={classes.contact}>
        sujilee91@gmail.com 
      </div>
      <div className={classes.contact}>
        Calgary, Alberta, Canada
      </div>
      <div className={classes.iconContainer}>
        <Fab size="small" className={classes.iconMarginRight} onClick={()=> window.open("https://www.linkedin.com/in/sujilee91/", "_blank")}>
          <FontAwesomeIcon icon={['fab', 'linkedin-in']}/>
        </Fab>
        <Fab size="small" className={classes.iconMargin} onClick={()=> window.open("https://github.com/sujilee91", "_blank")}>
          <FontAwesomeIcon icon={['fab', 'github-alt']}/>
        </Fab>
        <Fab size="small" className={classes.iconMargin} onClick={()=> window.open("https://www.instagram.com/sujilee_anderson/", "_blank")}>
          <FontAwesomeIcon icon={['fab', 'instagram']}/>
        </Fab>
        <Fab size="small" className={classes.iconMargin} onClick={()=> window.open("https://dribbble.com/sujilee91", "_blank")}>
          <FontAwesomeIcon icon={['fab', 'dribbble']}/>
        </Fab>
      </div>
    </div>
  </MuiThemeProvider>
  );
}

export default withStyles(styles)(Footer);
