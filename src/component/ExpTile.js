import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import customTheme from '../styles/theme'

const styles = (customTheme) => ({
  root: {
    paddingLeft: '25px',
    paddingRight: '25px',
    [customTheme.breakpoints.down('sm')]: {
      paddingLeft: '10px',
      paddingRight: '10px'
    },
    cursor: 'pointer'
  },
  verticalDivider: {
    width: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    height: '90%',
    margin: 'auto',
  },
  vdContainer: {
    display: 'flex',
    verticalAlign: 'middle'
  },
  divider: {
    marginTop: '15px',
    marginBottom: '15px'
  },
  hiddenDivider: {
    marginTop: '8px',
    marginBottom: '8px',
    height: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  company: {
    paddingTop: '5px',
    paddingBottom: '5px'
  }
});

class ExperienceTile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
     handelClick: ''
    }
  };

  render(){
    const {classes, year, from, to, company, description, title, divider, onClick} = this.props;
    return (    
      <div className={classes.root} onClick={onClick}>
        <Grid container spacing={8}>
          <Grid item xs={2}>
            {year && (<Typography className={classes.year} style={customTheme.typography.display1}>{year}</Typography>)}
            {(from || to) && (<Typography className={classes.date} style={customTheme.typography.display3}>{from} - {to}</Typography>)}
          </Grid>
          <Grid item xs={2} className={classes.vdContainer}>
            <div className={classes.verticalDivider}></div>
          </Grid>
          <Grid item xs={8}>
            {title && (<Typography className={classes.title} style={customTheme.typography.display1} >{title}</Typography>)}
            {company && (<Typography className={classes.company} style={customTheme.typography.display2}>{company}</Typography>)}
            {description && (
              <Typography className={classes.description} variant={'body1'}>
              {description.map((desc)=> {
                return desc + ' / '
              })}
              </Typography>)}
          </Grid>
        </Grid>
        {divider && (<Divider className={classes.divider}/>)}
        {!divider && (<Divider className={classes.hiddenDivider}/>)}
      </div>)
    }
}
export default withStyles(styles)(ExperienceTile);
