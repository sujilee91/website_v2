import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Title from '../component/Title';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
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
  },
  header: {
    color: '#ffff',
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: '800',
    letterSpacing: '2px'
  },
  headerContainer: {
    background: '#484848'
  },
  card: {
    borderRadius: '24px',
    border: '2px solid #484848 '
  },
  item: {
    paddingLeft: '15px',
    paddingRight: '15px',
    fontFamily: 'Oxygen',
    fontSize: '18px',
    lineHeight: '300%',
    display: 'inline-block'
  },
  uxItem: {
    fontFamily: 'Oxygen',
    fontSize: '18px',
    display: 'block',
    lineHeight: '330%'
  },
  content: {
    overflowX: 'auto',
    overflow: 'scroll',
    wordWrap: 'break-word',
    textAlign: 'center',
  },
  divider:{
    height: '2px',
    marginTop: '10px',
    marginBottom: '10px'
  }
});

function Skill(props) {
  const { classes } = props;
  const development1 = ['HTML5', 'SASS', 'CSS', 'ES6', 'ReactJS','AngularJS', 'Material-UI', 'Bootstrap' , 'PHP', 'Wordpress', 'JavaEE', 'jQuery', 'MySQL'];
  const devExtra = ['Bitbucket / JIRA', 'Github', 'SourceTree'];
  const uxUi = ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe XD', 'Sketch / Marvel']
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title value={'Skills'}/>
        <Grid container={true} spacing={40}>
          <Grid item={true} xs={12} sm={6}>
            <Card className={classes.card}>
              <CardHeader title={"Development"} classes={{root: classes.headerContainer, title: classes.header}}/>
              <CardContent className={classes.content}>
                  {development1.map((dev, index)=> {
                    return <span className={classes.item} key={index}>{dev}</span>
                  })}
                <Divider className={classes.divider}/>
                {devExtra.map((dev, index)=> {
                  return <span className={classes.item} key={index}>{dev}</span>
                })}
              </CardContent>
            </Card>
          </Grid>
          <Grid item={true} xs={12} sm={4}>
            <Card className={classes.card}>
              <CardHeader title={"UX / UI"} classes={{root: classes.headerContainer, title: classes.header}}/>
              <CardContent className={classes.content}>
                {uxUi.map((ux, index)=> {
                  return <div className={classes.uxItem} key={index}>{ux}</div>
                })}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Skill);