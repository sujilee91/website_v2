import React from 'react';
import { withStyles, MuiThemeProvider , Grid, Card, CardContent, CardActions, Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, withMobileDialog } from '@material-ui/core';
import Title from '../component/Title';
import websiteV1 from '../images/website_v1.png';
import websiteV2 from '../images/website_v2.png'
import customTheme from '../styles/theme';
import WebV2 from '../contents/WebV2'
import WebV1 from '../contents/WebV1'
import DS from '../contents/DS'
import Design from '../contents/Design'
import DSScreen from '../images/clinicScreen.png'
import IconWork from '../images/icons/OJ.png'
import Slider from "react-slick"
import Typography from '@material-ui/core/Typography';


const styles = (customTheme) => ({
  root: {
    flexGrow: 1,
    padding: '25px 50px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    [customTheme.breakpoints.down('sm')]:{
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
  slickSlider: {
    marginBottom: '50px'
  },
  cards: {
    margin: '20px',
    minHeight: '250px',
    display: 'grid',
    borderRadius: '12px',
  },
  imageTextContianer:{
    margin: 'auto',
    display: 'inline-grid',
    gridTemplateColumns: 'auto auto'
  },
  image: {
    width: 'auto',
    height: 'auto',
    minHeight: '160px',
    maxHeight: '160px',
    padding: '5px',
    margin: 'auto'
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
  },
  iconMargin: {
    margin: '10px',
    backgroundColor: 'white',
    boxShadow: 'none',
    fontSize: '20px'
  },
  iconMarginRight: {
    marginRight: '10px',
    backgroundColor: 'white',
    boxShadow: 'none',
    fontSize: '20px'
  },
  iconContainer: {
    textAlign: 'center'
  },
  viewMore: {
    fontSize: '1rem',
    justifyContent: 'center',
    alignItems:'center'
  },
  cardGradient: {
    background: '#BE3535',
    maxHeight: '28px',
    verticalAlign: 'middle',
    padding: '10px'
  },
  cardTitle: {
    verticalAlign: 'middle',
    color: '#ffff',
    fontWeight: '800',
  },
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
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <MuiThemeProvider theme={customTheme}>
        <div className={classes.root} name="Project">
          <div className={classes.container}>
            <Title value={'Latest Projects'}/>
            <Slider {...sliderSettings} className={classes.slickSlider}>
              <div>
                <Card elevation={1} className={classes.cards}>
                  <div className={classes.cardGradient}>
                    <Typography varient="body2" className={classes.cardTitle}>Design Work</Typography>
                  </div>
                  <CardContent>
                    <div className={classes.imageContainer}>
                      <img src={IconWork} className={classes.image}/>
                    </div>
                    <Typography variant="body1" className={this.props.classes.description}>
                      From personal resume to icon creation using Adobe Illustrator<br/><br/>
                      <em>
                        Adobe Illustrator
                      </em>
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button className={classes.viewMore} onClick={()=>{this.setState({open: !this.state.open, type:'web2'})}} color={"primary"} size={'small'} fullWidth={true}>
                      View More
                    </Button>
                  </CardActions> */}
                </Card>
              </div>
              <div>
                <Card elevation={1} className={classes.cards}>
                  <div className={classes.cardGradient}>
                    <Typography varient="body2" className={classes.cardTitle}>Personal Website V2</Typography>
                  </div>
                  <CardContent>
                    <div className={classes.imageContainer}>
                      <img src={websiteV2} className={classes.image} width="100%"/>
                    </div>
                    <Typography variant="body1" className={this.props.classes.description}>
                      2nd version of personal website using React, Material UI.<br/><br/>
                      <em>
                        ReactJS, Material UI, Adobe XD
                      </em>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button className={classes.viewMore} onClick={()=>{this.setState({open: !this.state.open, type:'web2'})}} color={"primary"} size={'small'} fullWidth={true}>
                      View More
                    </Button>
                  </CardActions>
                </Card>
              </div>
              <div>
                <Card elevation={1} className={classes.cards}>
                  <div className={classes.cardGradient}>
                    <Typography varient="body2" className={classes.cardTitle}>Clinic Website V2</Typography>
                  </div>
                  <CardContent>
                    <div className={classes.imageContainer}>
                      <img src={DSScreen} className={classes.image}/>
                    </div>
                    <Typography variant="body1" className={this.props.classes.description}>
                      Clinic business website in Korean using React, Material Ui<br/><br/>
                      <em>
                        ReactJS, Material UI, Adobe XD
                      </em>
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button className={classes.viewMore} onClick={()=>{this.setState({open: !this.state.open, type:'DS'})}} color={"primary"} size={'small'} fullWidth={true}>
                      View More
                    </Button>
                  </CardActions> */}
                </Card>
              </div>
              <div>
                <Card elevation={1} className={classes.cards}>
                  <div className={classes.cardGradient}>
                    <Typography varient="body2" className={classes.cardTitle}>Personal Website v1</Typography>
                  </div>
                  <CardContent>              
                    <div className={this.props.classes.imageContianer}>
                      <img src={websiteV1} className={this.props.classes.image} alt={'Website V1'}/>
                    </div>
                    <Typography variant="body1" className={this.props.classes.description}>
                        1st personal website using Bootstrap template.<br/><br/>
                        <em>Bootstrap, JS, CSS</em>
                      </Typography>
                  </CardContent>
                  <CardActions>
                    <Button className={classes.viewMore} onClick={()=>{this.setState({open: !this.state.open, type:'web1'})}} color={"primary"} size={'small'} fullWidth={true}>
                      View More
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Slider>
            {/* <Grid container spacing={40}>
              <Grid item xs={12} sm={6} md={3}>

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
                  <WebV2 />
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Dialog
                  open={this.state.open && this.state.type==='DS'}
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
                  <DS />
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
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
                  <WebV2 />
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Dialog
                  open={this.state.open && this.state.type==='web1'}
                  onClose={this.handleClose}
                  scroll={'paper'}
                  aria-labelledby="web1Dialog"
                  fullScreen={fullScreen}
                >
                  <DialogTitle id="web1Dialog" style={{backgroundColor: theme.palette.primary.main}}>
                    <span style={theme.typography.h6}>
                      Personal Website v1
                    </span>
                  </DialogTitle>
                  <WebV1/>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary" autoFocus>
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid> */}
          </div>
        </div>
      </MuiThemeProvider>
    )}
}

export default withMobileDialog()(withStyles(styles)(Project));
