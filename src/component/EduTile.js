import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import customTheme from '../styles/theme'
import { CardContent, MuiThemeProvider, Typography } from '@material-ui/core';

const styles = (customTheme) => ({
  degree: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '600',
    fontSize: 15,
  },
  award: {
    fontFamily: 'Noto Sans JP',
    fontWeight: '300',
    fontSize: 15,
    color: customTheme.palette.primary.contranstText
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
  },
  card: {
    borderRadius: '0',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
  },
  '$card:hover':{
    backgroundColor: '#00000',
    '& $frontCard':{
      transform: 'rotateY(180deg)'
    }
  },
  frontCard: {
    backfaceVisibility: 'hidden',
    zIndex: 2
  },
  backCard: {
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    zIndex: 1
  },
  centerAlign: {
    textAlign: 'center'
  },
  rightAlign: {
    textAlign: 'right'
  }
});

class EducationTile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
     selectedEdu: '',
     mouseOver: false
    }
  };

  render(){
    const {classes, location, schoolName, degree, award,  date, description } = this.props;
    const {
      rightAlign: rightAlignClass,
      centerAlign: centerAlignClass
    } = this.props.classes

    const cardClasses = [this.props.classes.card];

    if (this.props.align==='center') {
      cardClasses.push(centerAlignClass)
    }
    if(this.props.align==='right'){
      cardClasses.push(rightAlignClass)
    }

    return (
      <MuiThemeProvider theme={customTheme}>
        <Grid item xs={12} md={4}>
          <Card elevation={0} classes={{ root: cardClasses.join(' ') }}>
            <CardContent className={classes.frontCard}>
              <Typography variant={"subtitle1"}>
                {location}
              </Typography>
              <Typography variant={"h5"}>
                {schoolName}
              </Typography>
              <Typography variant={"body2"}>
                {degree}
              </Typography>
              <div className={classes.award}>
                {award}
              </div>
              <div className={classes.date}>
                {date}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </MuiThemeProvider>
    )
  }
}
export default withStyles(styles)(EducationTile);
