import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Title from '../component/Title';
import Button from '@material-ui/core/Button';
import customTheme from '../styles/theme'
import { MuiThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const styles = (customTheme) => ({
  root: {
    flexGrow: 1,
    padding: '50px 50px 25px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },
  container: {
    maxWidth: '1170px',
    margin: 'auto'
  },
  resumeButton: {
    fontSize: '1rem',
    padding: '10px 30px',
    justifyContent: 'center',
    alignItems:'center'
  },
  cards: {
    marginTop: '2.5rem',
    marginBottom: '2.5rem',
    textAlign: 'center',
  },
  buttonGrid: {
    textAlign: 'center'
  },
  aboutCard: {
    borderRadius: customTheme.typography.pxToRem(500),
    width: customTheme.typography.pxToRem(200),
    height:  customTheme.typography.pxToRem(200)
  }
});

class About extends React.Component{

  render(){
  return (
    <div className={this.props.classes.root}>
      <div className={this.props.classes.container}>
        <Title value={'About'}/>
        <MuiThemeProvider theme={customTheme}>
          <Grid container spacing={24} className={this.props.classes.cards}>
            <Grid item lg={3} md={3} xs={12}>
              <Card className={this.props.classes.aboutCard}>
                <CardContent>
                  <div>
                    
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <Card className={this.props.classes.aboutCard}>
                <CardContent>
                  <div>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <Card className={this.props.classes.aboutCard}>
                <CardContent>
                  <div>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <Card className={this.props.classes.aboutCard}>
                <CardContent>
                  <div>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={24} className={this.props.classes.buttonGrid}>
            <Grid item lg={12} xs={12}>
              <Button color={"primary"} variant="contained" size={'small'} className={this.props.classes.resumeButton} onClick={this.openDialog}>
                View Resume
              </Button>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    </div>
    );
  }
}

export default withStyles(styles)(About);
