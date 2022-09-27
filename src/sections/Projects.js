import React, { useState } from 'react'
import {
  withStyles,
  MuiThemeProvider,
  Grid,
  Card,
  CardContent,
  CardActions,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from '@material-ui/core'
import Title from '../component/Title'
import websiteV1 from '../images/website_v1.png'
import websiteV2 from '../images/website_v2.png'
import customTheme from '../styles/theme'
import WebV2 from '../contents/WebV2'
import WebV1 from '../contents/WebV1'
import DS from '../contents/DS'
import Design from '../contents/Design'
import DSScreen from '../images/clinicScreen.png'
import IconWork from '../images/icons/OJ.png'
import Slider from 'react-slick'
import Typography from '@material-ui/core/Typography'

const styles = (customTheme) => ({
  root: {
    flexGrow: 1,
    padding: '25px 50px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    [customTheme.breakpoints.down('sm')]: {
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
    justifyContent: 'center',
  },
  imageContianer: {
    textAlign: 'center',
    margin: 'auto',
  },
  slickSlider: {
    marginBottom: '50px',
  },
  cards: {
    margin: '20px',
    minHeight: '250px',
    display: 'grid',
    borderRadius: '12px',
  },
  imageTextContianer: {
    margin: 'auto',
    display: 'inline-grid',
    gridTemplateColumns: 'auto auto',
  },
  image: {
    width: 'auto',
    height: 'auto',
    minHeight: '160px',
    maxHeight: '160px',
    padding: '5px',
    margin: 'auto',
  },
  typo: {
    textAlign: 'center',
    margin: 'auto',
    '& span': {
      padding: '0px 10px',
    },
  },
  typo2: {
    textAlign: 'center',
    margin: 'auto',
    paddingTop: '15px',
    '& span': {
      padding: '0px 10px',
    },
  },
  section: {
    padding: '15px 0px',
  },
  iconMargin: {
    margin: '10px',
    backgroundColor: 'white',
    boxShadow: 'none',
    fontSize: '20px',
  },
  iconMarginRight: {
    marginRight: '10px',
    backgroundColor: 'white',
    boxShadow: 'none',
    fontSize: '20px',
  },
  iconContainer: {
    textAlign: 'center',
  },
  viewMore: {
    fontSize: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardGradient: {
    background: '#BE3535',
    maxHeight: '28px',
    verticalAlign: 'middle',
    padding: '10px',
  },
  cardTitle: {
    verticalAlign: 'middle',
    color: '#ffff',
    fontWeight: '800',
  },
})

const Project = ({ classes, fullScreen }) => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState('')

  const handleClose = () => {
    setOpen(false)
  }

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
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <MuiThemeProvider theme={customTheme}>
      <div className={classes.root} name="Project">
        <div className={classes.container}>
          <Title value={'Latest Projects'} />
          <Slider {...sliderSettings} className={classes.slickSlider}>
            <div>
              <Card elevation={1} className={classes.cards}>
                <div className={classes.cardGradient}>
                  <Typography varient="body2" className={classes.cardTitle}>
                    Design Work
                  </Typography>
                </div>
                <CardContent>
                  <div className={classes.imageContainer}>
                    <img src={IconWork} className={classes.image} />
                  </div>
                  <Typography variant="body1" className={classes.description}>
                    From personal resume to icon creation using Adobe
                    Illustrator
                    <br />
                    <br />
                    <em>Adobe Illustrator</em>
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card elevation={1} className={classes.cards}>
                <div className={classes.cardGradient}>
                  <Typography varient="body2" className={classes.cardTitle}>
                    Personal Website V2
                  </Typography>
                </div>
                <CardContent>
                  <div className={classes.imageContainer}>
                    <img
                      src={websiteV2}
                      className={classes.image}
                      width="100%"
                    />
                  </div>
                  <Typography variant="body1" className={classes.description}>
                    2nd version of personal website using React, Material UI.
                    <br />
                    <br />
                    <em>ReactJS, Material UI, Adobe XD</em>
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card elevation={1} className={classes.cards}>
                <div className={classes.cardGradient}>
                  <Typography varient="body2" className={classes.cardTitle}>
                    Clinic Website V2
                  </Typography>
                </div>
                <CardContent>
                  <div className={classes.imageContainer}>
                    <img src={DSScreen} className={classes.image} />
                  </div>
                  <Typography variant="body1" className={classes.description}>
                    Clinic business website in Korean using React, Material Ui
                    <br />
                    <br />
                    <em>ReactJS, Material UI, Adobe XD</em>
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card elevation={1} className={classes.cards}>
                <div className={classes.cardGradient}>
                  <Typography varient="body2" className={classes.cardTitle}>
                    Personal Website v1
                  </Typography>
                </div>
                <CardContent>
                  <div className={classes.imageContianer}>
                    <img
                      src={websiteV1}
                      className={classes.image}
                      alt={'Website V1'}
                    />
                  </div>
                  <Typography variant="body1" className={classes.description}>
                    1st personal website using Bootstrap template with vanilla
                    JS.
                    <br />
                    <br />
                    <em>Bootstrap, JS, CSS</em>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Slider>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default withMobileDialog()(withStyles(styles)(Project))
