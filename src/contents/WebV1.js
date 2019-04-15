import React from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { DialogContent, } from '@material-ui/core';
import theme from '../styles/theme';
import Template from '../images/template.png'
import logo from '../images/logo_me.png'
import quote from '../images/QOD.png'
import skills from '../images/skills.png'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: '25px 50px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    [theme.breakpoints.down('sm')]:{
      padding: '25px',
    },
  },
  imageContianer:{
    textAlign: 'center',
    margin: 'auto'
  },
  imageTextContianer:{
    margin: 'auto',
    display: 'inline-grid',
    gridTemplateColumns: 'auto auto'
  },
  image: {
    width: '85%',
    padding: '10px',
  },
  section: {
    padding: '15px 0px'
  },
});

function WebV1(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <DialogContent>
        <div className={classes.section}>
          <Typography variant='overline'>
            Inspiration
          </Typography>
          <div className={classes.imageTextContianer}>
            <img src={Template} height="200px"/>
            <Typography variant={"body1"} style={{paddingLeft: '10px'}}>
              In 2017, right after finishing my school, as a IT-Software Development graduate student, I felt I must created my personal website. 
              I had minimum knowledge back then, with frontend frameworks and JavaScript libraries.
              <br/>
              <br/>
              Luckily after long search through the web, I was able to find simple, clean bootstrap template 
              <span>
                <em onClick={()=> window.open("https://keenthemes.com/free-bootstrap-templates/acecv-professional-cv-parallax-bootstrap-template/", "_blank")}> HERE. </em>
              </span>
            </Typography>
          </div>
        </div>
        <div className={classes.section}>
          <Typography variant='overline'>
            Implementation
          </Typography>
          <Typography variant={"body1"}>
            There are not much of customization with pre-built templates but surprisingly there were some twicks I added on the website. 
          </Typography>
            <img src={logo} height="50px" width="150px"/>
          <Typography variant={"body1"}>
            Personal logo, using Adobe Illustrator,
          </Typography>
          <img src={skills} height="100px" width="300px"/>
          <Typography variant={"body1"}>
            Personal logo, using Adobe Illustrator,
          </Typography>
          <img src={quote} height="110px" width="300px"/>
          <Typography variant={"body1"}>
            Personal logo, using Adobe Illustrator,
          </Typography>
        </div>
      </DialogContent>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(WebV1);
