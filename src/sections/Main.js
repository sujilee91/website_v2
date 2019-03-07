import React from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../styles/theme'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '100px',
    paddingBottom: '100px',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
    backgroundColor: 'inherit',
    paddingLeft: theme.typography.pxToRem(50),
    marginTop: theme.typography.pxToRem(100),
    [theme.breakpoints.down('sm')]:{
      paddingLeft: theme.typography.pxToRem(20),
      textAlign: 'center'
    },
  },
  title1: {
    color: '#484848',
  },
  title2: {
    paddingTop: '15px',
    marginBottom: '35px',
    paddingLeft: '5px',
    color: '#B7B8BA',
  },
  divider: {
    maxWidth: '80%',
    [theme.breakpoints.down('sm')]:{
      margin: 'auto'
    },
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
  iconContainer: {
    marginTop: '30px',
    marginBottom: '20px'
  }
});

function Main(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container={true} spacing={0} className={classes.container}>
          <Grid item={true} xs={12} sm={6}>
            <Typography variant="h1" className={classes.title1}>
              Front-end
            </Typography>
            <Typography variant="h3" className={classes.title2}>
              UX / UI Developer
            </Typography>
            <Divider className={classes.divider}/>
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
          </Grid>
          <Grid item={true} xs={12} sm={6}>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(Main);
