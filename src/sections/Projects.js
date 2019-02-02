import React from 'react';
import { withStyles, Grid, Card, CardContent, Typography } from '@material-ui/core';
import Title from '../component/Title';
import website from '../images/website_v1.gif'

const styles = () => ({
  root: {
    flexGrow: 1,
    padding: '25px 50px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto',
  },
  resumeButton: {
    fontSize: '1rem',
    padding: '10px 30px',
    justifyContent: 'center'
  },
  imageContianer:{
  },
  image: {
    width: '100%',
  }
});

function Project(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title value={'Latest Projects'}/>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={0}>
              <div className={classes.imageContianer}>
                <img src={website} className={classes.image} alt={'Website V1'}/>
              </div>
              <CardContent>
                <Typography >
                    Personal Website v1
                </Typography>
                <Typography component="p"  className={classes.description}>
                    Deliver new feature / Update existing page client Wordpress page, and Wordpress extension.
                    <div className={classes.specs}>
                      AngularJS, Angular Material, PHP, Wordpress
                    </div>
                  </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

      </div>
    </div>
  );
}

export default withStyles(styles)(Project);
