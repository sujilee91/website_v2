import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Title from '../Title';
import Button from '@material-ui/core/Button';
import theme from '../../styles/theme'
import { MuiThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

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
    margin: 'auto',
    paddingLeft: '50px' 
  },
  resumeButton: {
    fontSize: '1rem',
    padding: '10px 30px',
    justifyContent: 'center',
    alignItems:'center'
  },
  cards: {
    marginTop: '2.5rem',
    marginBottom: '2.5rem'
  },
  buttonGrid: {
    textAlign: 'center'
  }
});

function About(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title value={'About'}/>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={24} className={classes.cards}>
            <Grid item lg={3} xs={6}>
              <Card>
                <CardContent>
                  <div>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} xs={6}>
              <Card>
                <CardContent>
                  <div>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} xs={6}>
              <Card>
                <CardContent>
                  <div>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} xs={6}>
              <Card>
                <CardContent>
                  <div>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={24} className={classes.buttonGrid}>
            <Grid item lg={12} xs={12}>
              <Button color={"primary"} variant="contained" size={'small'} className={classes.resumeButton}>
                View Resume
              </Button>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    </div>
  );
}

export default withStyles(styles)(About);
