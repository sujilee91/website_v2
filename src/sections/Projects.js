import React from 'react';
import { withStyles, MuiThemeProvider , Grid, Card, CardContent, CardActions, Typography, Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, withMobileDialog } from '@material-ui/core';
import Title from '../component/Title';
import websiteV1 from '../images/website_v1.gif';
import websiteV2 from '../images/web_v2.gif';
import theme from '../styles/theme';
import colorTheme from '../images/colorTheme.png';
import xd from '../images/xd.png';
import fonts from '../images/fonts.png';

const styles = (theme) => ({
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
  imageContianer:{
    textAlign: 'center',
    margin: 'auto'
  },
  image: {
    width: '85%',
    padding: '10px',
  },
  typo: {
    textAlign: 'center',
    margin: 'auto',
    '& span': {
      padding: '0px 10px',
    }
  },
  typo2: {
    textAlign: 'center',
    margin: 'auto',
    paddingTop: '15px',
    '& span': {
      padding: '0px 10px',
    }
  },
  section: {
    padding: '15px 0px'
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
    const { classes, fullScreen } = this.props
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root} name="Project">
        <div className={classes.container}>
          <Title value={'Latest Projects'}/>
          <Grid container spacing={40}>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={0}>
                <CardContent>
                  <div className={classes.imageContainer}>
                    <img src={websiteV2} className={classes.image}/>
                  </div>
                  <Typography variant="body2">
                      Personal Website v2
                  </Typography>
                  <Typography variant="body1" className={this.props.classes.description}>
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
                fullScreen={fullScreen}
              >
                <DialogTitle id="web2Dialog" style={{backgroundColor: theme.palette.primary.main}}>
                  <Typography variant='title' style={{color: theme.palette.primary.contrastText}}>
                    Personal Website v2
                  </Typography>
                </DialogTitle>
                <DialogContent>
                  <div className={classes.section}>
                    <Typography variant='display4'>
                      Inspiration
                    </Typography>
                    <Typography variant={"body1"}>
                      <p>
                        In 2017, I created my first personal website. 
                        At that time, I have minimum knowledge on frontend frameworks, and JavaScript libraries, 
                        so the best options that I had was using Bootstrap template. Simple, easy, and fast.
                      </p>
                      <p>
                        It been kind of shame for me to use free template for personal website as a frontend developer.
                        Bootstrap template is surely simple, clean, and easy but can never a thing that I can be proud of.
                      </p>
                      <p>
                        As starting of 2019, I knew it is time to build it by my own. I believed that I have ability and skills to build my website from the scratch,
                        and I already have awesome resume that I can transfer into a website version!
                      </p> 
                    </Typography>
                  </div>
                  <div className={classes.section}>
                    <Typography variant='display4'>
                      Planning
                    </Typography>
                    <Typography variant={"body1"}>
                      <p>
                        Even I already have my resume that I inspired by, it still needs to be transformed like a website.
                        That is where I show my Adobe XD skills! 
                      </p>
                    </Typography>
                    <div className={classes.imageContianer}>
                      <img src={websiteV2} height="180px" width="250px"/>
                    </div>
                    <Typography variant={"body1"}>
                      <p>
                        After building rough sketch / wireframe of website, I moved on to specify color selections and font styles.
                      </p>
                    </Typography>
                  </div>
                  <div className={classes.section}>
                    <Typography variant='display4'>
                      Theme & Customization
                    </Typography>
                    <div className={classes.imageContianer}>
                      <img src={colorTheme} alt={'colorTheme'} className={classes.image} align="middle"/>
                    </div>
                    <Typography variant={"body1"}>
                      <p>
                        Picking primary/secondary color wasn't that hard since I already have my resume that I am decided to using for my personal website. 
                      </p>
                      <p>
                        After getting hex of these colors, I implemented on these theme colors on Material-ui framework. 
                      </p>
                    </Typography>
                    <div className={classes.typo}>
                      <span style={theme.typography.h1}>H1</span>
                      <span style={theme.typography.h2}>H2</span>
                      <span style={theme.typography.h3}>H3</span>
                      <span style={theme.typography.h4}>H4</span>
                    </div>
                    <div className={classes.typo}>
                      <span style={theme.typography.display1}>Display1</span>
                      <span style={theme.typography.display2}>Display2</span>
                      <span style={theme.typography.display3}>Display3</span>
                      <span style={theme.typography.display4}>Display4</span>
                    </div>
                    <div className={classes.typo2}>
                      <span style={theme.typography.body1}>Body1</span>
                      <span style={theme.typography.body2}>Body2</span>
                      <span style={theme.typography.button}>Button</span>
                    </div>
                    <Typography variant={"body1"}>
                      <p >
                        Picking font is always fun but when it comes to put it together, it gets little tricky.
                        I have used google fonts, got 10 different font families, end up using only 6.
                      </p>
                    </Typography>
                  </div>
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
                  <Typography variant="body2">
                      Personal Website v1
                  </Typography>
                  <Typography variant="body1" className={this.props.classes.description}>
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

export default withMobileDialog()(withStyles(styles)(Project));
