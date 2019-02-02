import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    paddingTop: '50px',
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '4rem',
    fontWeight: 700,
    lineHeight: 1.04,
    letterSpacing: '0em',
    color: '#484848',
  },
  title2: {
    paddingTop: '15px',
    marginBottom: '35px',
    paddingLeft: '5px',
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '1.8rem',
    fontWeight: 700,
    lineHeight: 1.04,
    letterSpacing: '0em',
    color: '#B7B8BA',
  },
  divider: {
    maxWidth: '30%'
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
};

function Main(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.innerContainer1}>
          <Typography variant="h3" component="h3" className={classes.title1}>
            Front-end
          </Typography>
          <Typography variant="h5" className={classes.title2}>
            UX / UI Developer
          </Typography>
          <Divider className={classes.divider}/>
          <div className={classes.iconContainer}>
            <Fab size="small" className={classes.iconMarginRight} onClick={()=> window.open("https://www.linkedin.com/in/sujilee91/", "_blank")}>
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} onClick={()=> window.open("https://www.linkedin.com/in/sujilee91/", "_blank")}/>
            </Fab>
            <Fab size="small" className={classes.iconMargin}>
              <FontAwesomeIcon icon={['fab', 'github-alt']} onClick={()=> window.open("https://github.com/sujilee91", "_blank")}/>
            </Fab>
            <Fab size="small" className={classes.iconMargin}>
              <FontAwesomeIcon icon={['fab', 'instagram']} onClick={()=> window.open("https://www.instagram.com/sujilee_anderson/", "_blank")}/>
            </Fab>
            <Fab size="small" className={classes.iconMargin}>
              <FontAwesomeIcon icon={['fab', 'dribbble']} onClick={()=> window.open("https://dribbble.com/sujilee91", "_blank")}/>
            </Fab>
          </div>
        </div>
        <div className={classes.innerContainer2}>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Main);
