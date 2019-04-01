import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Title from '../component/Title';
import EducationTitle from '../component/EduTile';
import Grid from '@material-ui/core/Grid';
import customTheme from '../styles/theme'

const styles = (customTheme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    padding: '50px 50px',
    marginBottom: '50px',
    [customTheme.breakpoints.down('sm')]:{
      padding: '50px 25px',
    },
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto'
  },
});

function Education(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title value={'Education'}/>
        <Grid container spacing={8} className={classes.eduContainer}>
          <EducationTitle 
            location={'Calgary, Alberta, Canada'} 
            schoolName={'SAIT'} 
            degree={'Diploma, IT - Software Development'} 
            award={'International Student Honor Award'} 
            description={'Web Programming, Interface Design, Operating System, Java, Object Oriented Programming, Database Administration'} 
            date={'2015.08 - 2017.04'}
            align={'left'}
          />
          <EducationTitle 
            location={'Seoul, South Korea'} 
            schoolName={"Duksung Women's Univ."} 
            degree={'Bachelor of Science, Food and Nutrition'} 
            award={'Academic Achievement Scholarship'} 
            date={'2009.08 - 2015.04'}
            align={'center'}
          />
          <EducationTitle 
            location={'Fulton, MO, USA'} 
            schoolName={"Westminster College"} 
            degree={'Biology'} 
            award={'International Exchange Student'}
            date={'2011.08 - 2012.04'}
            align={'right'}
          />
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Education);
