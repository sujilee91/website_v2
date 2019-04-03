import React from 'react';
import Title from '../component/Title';
import Button from '@material-ui/core/Button';
import customTheme from '../styles/theme'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';

const styles = (customTheme) => ({
  root: {
    flexGrow: 1,
    padding: '50px 50px 25px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    [customTheme.breakpoints.down('sm')]:{
      padding: '50px 25px',
    },
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
    height:  customTheme.typography.pxToRem(200),
    margin: 'auto',
    [customTheme.breakpoints.down('sm')]:{
      width: customTheme.typography.pxToRem(100),
    height:  customTheme.typography.pxToRem(100),
    },
    [customTheme.breakpoints.down('md')]:{
      width: customTheme.typography.pxToRem(150),
    height:  customTheme.typography.pxToRem(150),
    },
  }
});

class About extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
     openDialog: false
    }
  };

  handleClose = () => {
    this.setState({
      openDialog: false
    })
  }

  render(){
  return (
    <div className={this.props.classes.root} name="About">
      <div className={this.props.classes.container}>
        <Title value={'About'}/>
        <MuiThemeProvider theme={customTheme}>
          <Grid container spacing={24} className={this.props.classes.cards}>
            <Grid item md={3} sm={6} xs={6}>
              <Card className={this.props.classes.aboutCard}>
                <CardContent>
                  <div>
                    
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <Card className={this.props.classes.aboutCard}>
                <CardContent>
                  <div>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <Card className={this.props.classes.aboutCard}>
                <CardContent>
                  <div>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
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
              <Button color={"primary"} variant="contained" size={'small'} className={this.props.classes.resumeButton} onClick={()=>{this.setState({openDialog: true})}}>
                View Resume
              </Button>
              <Dialog
                open={this.state.openDialog}
                onClose={this.handleClose}
                scroll={'paper'}
                aria-labelledby="ResumeDialog"
                maxWidth={'md'}
                fullWidth={true}
                >
                <DialogContent className={this.props.classes.dialog}>
                  <embed src="./SJLEE.pdf" width="100%" height="700px" type="application/pdf"/> 
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary" autoFocus>
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    </div>
    );
  }
}

export default withStyles(styles)(About);
