import React from 'react';
import { withStyles, MuiThemeProvider , Grid, Card, CardContent, CardActions, Typography, Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, withMobileDialog } from '@material-ui/core';
import Title from '../component/Title';
import websiteV1 from '../images/website_v1.gif';
import websiteV2 from '../images/web_v2.gif';
import customeTheme from '../styles/theme';
import colorTheme from '../images/colorTheme.png';
import fonts from '../images/fonts.png';
import theme from '../styles/theme'
const styles = () => ({
  root: {
    flexGrow: 1,
    padding: '25px 50px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    [theme.breakpoints.down('sm')]:{
      padding: '25px',
    },
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
    <MuiThemeProvider theme={theme}>
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
                  <Typography variant="body">
                      Personal Website v2
                  </Typography>
                  <Typography variant="body" className={this.props.classes.description}>
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
                  <Typography variant='display4'>
                    Planning & Inspiration
                  </Typography>
                  <Typography variant='display4'>
                    Theme & Customization
                  </Typography>
                  <img src={colorTheme} alt={'colorTheme'} className={this.props.classes.image}/>
                  <DialogContentText variant={"body1"}>
                    <Typography variant={"body1"}>
                      These are the colors used in the new version website. 
                      The colors has chosen from that I have built, and implmented as primar and secondary color in materal ui theme.
                    </Typography>
                  </DialogContentText>
                  <Typography variant={"h1"}>H1</Typography>
                  <Typography variant={"h2"}>H2</Typography>
                  <Typography variant={"h3"}>H3</Typography>
                  <Typography variant={"h4"}>H4</Typography>
                  <Typography variant={"display1"}>Display1</Typography>
                  <Typography variant={"display2"}>Display2</Typography>
                  <Typography variant={"display3"}>Display3</Typography>
                  <Typography variant={"display4"}>Display4</Typography>
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
                  <Typography variant="body">
                      Personal Website v1
                  </Typography>
                  <Typography variant="body" className={this.props.classes.description}>
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
    </MuiThemeProvider>
    )}
}

export default withStyles(styles)(Project);
