import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Title from '../component/Title';
import EducationTitle from '../component/EduTile';
import theme from '../styles/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: '50px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto'
  }
});

function Education(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title value={'Education'}/>
        <EducationTitle 
          location={'Calgary, Alberta, Canada'} 
          schoolName={'SAIT'} 
          degree={'Diploma, IT - Software Development'} 
          award={'International Student Honor Award'} 
          description={'Web Programming, Interface Design, Operating System, Java, Object Oriented Programming, Database Administration'} 
          date={'2015.08 - 2017.04'}
        />
        <EducationTitle 
          location={'Seoul, South Korea'} 
          schoolName={"Duksung Women's University"} 
          degree={'Bachelor of Science in Food and Nutrition'} 
          award={'Academic Achievement Scholarship'} 
          date={'2009.08 - 2015.04'}
        />
        <EducationTitle 
          location={'Fulton, MO, USA'} 
          schoolName={"Westminster College"} 
          degree={'Biology'} 
          award={'International Exchange Student'}
          date={'2011.08 - 2012.04'}
        />
      </div>
    </div>
  );
}

export default withStyles(styles)(Education);
