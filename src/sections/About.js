import React from 'react';
import Title from '../component/Title';
import Button from '@material-ui/core/Button';
import customTheme from '../styles/theme'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import Beach from '../images/icons/Beach_edit.svg'
import Camper from '../images/icons/Camp_Edit.svg'
import Nomad from '../images/icons/Dev_Lee.svg'

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
    margin: 'auto'
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
          <Grid container spacing={0} className={this.props.classes.cards}>
            <Grid item md={3} sm={6} xs={6} className={this.props.classes.aboutCard}>
              <img src={Nomad} alt="RemoteWorker" width="90%"/>
            </Grid>
            <Grid item md={3} sm={6} xs={6} className={this.props.classes.aboutCard}>
            <img src={Beach} alt="beach" width="90%"/>
            </Grid>
            <Grid item md={3} sm={6} xs={6} className={this.props.classes.aboutCard}>
            <img src={Camper} alt="Camper" width="90%"/>
            </Grid>
            <Grid item md={3} sm={6} xs={6} className={this.props.classes.aboutCard}>
            <img src={Beach} alt="beach" width="90%"/>
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
