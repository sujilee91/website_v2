import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import theme from '../styles/theme'

const styles = (theme) => ({
  root: {
    paddingTop: '15px',
    paddingBottom: '15px',
    textAlign: 'right'
  },
  degree: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '600',
    fontSize: 15,
  },
  award: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '300',
    fontSize: 15,
    color: theme.palette.primary.contranstText
  },
  description: {
    fontSize: 13
  },
  date: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '300',
    fontSize: 15,
    color: '#be3535',
    fontStyle: 'italic'
  }
});

class EducationTile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
     handelClick: ''
    }
  };

  render(){
    const {classes, location, schoolName, degree, award, description, date } = this.props;
    return (    
        <Grid container spacing={8} className={classes.root} direction={'row-reverse'}>
          <Grid item xs={12} md={4}>
            <div style={theme.typography.display2}>
              {location}
            </div>
            <div style={theme.typography.display1}>
              {schoolName}
            </div>
            <div className={classes.degree}>
              {degree}
            </div>
            <div className={classes.award}>
              {award}
            </div>
            {/* <div className={classes.description}>
              {description}
            </div> */}
            <div className={classes.date}>
              {date}
            </div>
          </Grid>
        </Grid>
      )
    }
}
export default withStyles(styles)(EducationTile);
