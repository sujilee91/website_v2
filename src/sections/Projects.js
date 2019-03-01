import React from 'react';
import { withStyles, Grid, Card, CardContent, CardActions, Typography, Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, withMobileDialog } from '@material-ui/core';
import Title from '../component/Title';
import websiteV1 from '../images/website_v1.gif';
import websiteV2 from '../images/web_v2.gif';
import customeTheme from '../styles/theme';
import colorTheme from '../images/colorTheme.png';
import fonts from '../images/fonts.png';

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
  imageContianer:{},
  image: {
    width: '100%',
  }
});

class Project extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      type: ''
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render(){
    const { classes } = this.props
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title value={'Latest Projects'}/>
        <Grid container spacing={40}>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={0}>
              <CardContent>
                <div className={classes.imageContainer}>
                  <img src={websiteV2} className={classes.image}/>
                </div>
                <Typography>
                    Personal Website v2
                </Typography>
                <Typography className={this.props.classes.description}>
                    Create 2nd version of personal website based on PDF form resume.
                    <span className={this.props.classes.specs}>
                      ReactJS, Material UI, Adobe XD
                    </span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={()=>{this.setState({open: !this.state.open, type:'web2'})}}>
                  View More
                </Button>
              </CardActions>
            </Card>
            <Dialog
              open={this.state.open && this.state.type==='web2'}
              onClose={this.handleClose}
              scroll={'paper'}
              aria-labelledby="web2Dialog"
            >
              <DialogTitle id="web2Dialog">Personal Website v2</DialogTitle>
              <DialogContent>
                <Typography style={customeTheme.typography.display4}>
                  Planning & Insperation
                </Typography>
                <Typography style={customeTheme.typography.display4}>
                  Theme & Customization
                </Typography>
                <img src={colorTheme} alt={'colorTheme'} className={this.props.classes.image}/>
                <DialogContentText>
                  <div>
                    I have build my first persoanl website on early Februray. 
                  </div>
                </DialogContentText>
                <DialogContentText>
                  <div>
                    I have build my first persoanl website on early Februray. 
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={0}>
              <CardContent>              
                <div className={this.props.classes.imageContianer}>
                  <img src={websiteV1} className={this.props.classes.image} alt={'Website V1'}/>
                </div>
                <Typography>
                    Personal Website v1
                </Typography>
                <Typography className={this.props.classes.description}>
                    Create 1st personal website using Bootstrap template
                    <span className={this.props.classes.specs}>
                      Bootstrap Template, JS
                    </span>
                  </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={()=>{this.setState({open: !this.state.open, type:'web1'})}}>
                  View More
                </Button>
              </CardActions>
            </Card>
            <Dialog
              fullScreen={this.props.children}
              open={this.state.open && this.state.type==='web1'}
              onClose={this.handleClose}
              scroll={'paper'}
              aria-labelledby="web1Dialog"
              >
              <DialogTitle id="web21ialog">Personal Website v1</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <Typography>
                    Planning
                  </Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </div>
    </div>
  )}
}

export default withStyles(styles)(Project);
