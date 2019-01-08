import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import zIndex from '@material-ui/core/styles/zIndex';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
  container: {
    maxWidth: '1170px',
    margin: 'auto',
    backgroundColor: 'inherit',
    paddingLeft: '50px' 
  },
  title1: {
    paddingTop: '50px'
  },
  title2: {
    paddingTop: '20px',
    paddingBottom: '20px'
  },
  divider: {
    maxWidth: '30%'
  },
  iconMargin: {
    margin: '5px',
    backgroundColor: 'white'
  },
  iconMarginRight: {
    marginRight: '5px',
    backgroundColor: 'white'
  },
  iconContainer: {
    marginTop: '20px',
  }
};

function Main(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h3" component="h3" className={classes.title1}>
          Front-end
        </Typography>
        <Typography variant="h5" className={classes.title2}>
          UX/UI Developer
        </Typography>
        <Divider className={classes.divider}/>
        <div className={classes.iconContainer}>
          <Fab size="small" className={classes.iconMarginRight}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </Fab>
          <Fab size="small" className={classes.iconMargin}>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </Fab>
          <Fab size="small" className={classes.iconMargin}>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </Fab>
          <Fab size="small" className={classes.iconMargin}>
            <FontAwesomeIcon icon={['fab', 'dribbble']} />
          </Fab>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Main);
