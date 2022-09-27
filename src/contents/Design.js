import React from 'react'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DialogContent } from '@material-ui/core'
import colorTheme from '../images/colorTheme.png'
import Animation from '../images/animation.gif'
import websiteV2 from '../images/web_v2.gif'
import theme from '../styles/theme'

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: '25px 50px',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      padding: '25px',
    },
  },
  imageContianer: {
    textAlign: 'center',
    margin: 'auto',
  },
  imageTextContianer: {
    margin: 'auto',
    display: 'inline-grid',
    gridTemplateColumns: 'auto auto',
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
})

const WebV2 = ({ classes }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <DialogContent>
        <div className={classes.section}>
          <Typography variant="overline">Inspiration</Typography>
          <Typography variant={'body1'} paragraph />
          <Typography variant={'body1'} paragraph>
            It been kind of shame for me to use free template for personal
            website as a frontend developer. Bootstrap template is surely
            simple, clean, and easy but can never a thing that I can be proud
            of.
          </Typography>
          <Typography variant={'body1'} paragraph>
            As starting of 2019, I knew it is time to build my website by my
            own. I believed that I have ability and skills to build my website
            from the scratch, and I already have awesome resume that I can
            transfer into a website version!
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography variant="overline" paragraph>
            Planning
          </Typography>
          <Typography variant={'body1'} paragraph>
            Even I already have my resume that I inspired by, it still needs to
            be transformed like a website. That is where I show my Adobe XD
            skills!
          </Typography>
          <div className={classes.imageContianer} paragraph>
            <img src={websiteV2} height="180px" width="250px" />
          </div>
          <Typography variant={'body1'} paragraph>
            After building rough sketch / wireframe of website, I moved on to
            selecting specify color and font styles that I am going to use.
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography variant="overline" paragraph>
            Theme & Customization
          </Typography>
          <div className={classes.imageContianer}>
            <img
              src={colorTheme}
              alt={'colorTheme'}
              className={classes.image}
              align="middle"
            />
          </div>
          <Typography variant={'body1'} paragraph>
            Picking primary/secondary color wasn't that hard since I already
            have my resume AND wireframe, basically pre-selected color.
          </Typography>
          <Typography variant={'body1'} paragraph>
            After getting all hex # of the colors, I implemented on these theme
            colors on Material-ui framework.
          </Typography>
          <div className={classes.typo}>
            <span style={theme.typography.h1}>H1</span>
            <span style={theme.typography.h2}>H2</span>
            <span style={theme.typography.h3}>H3</span>
            <span style={theme.typography.h4}>H4</span>
            <span style={theme.typography.h5}>H5</span>
            <span style={theme.typography.h6}>H6</span>
          </div>
          <div className={classes.typo}>
            <span style={theme.typography.subtitle1}>Subtitle1</span>
            <span style={theme.typography.subtitle2}>Subtitle2</span>
            <span style={theme.typography.overline}>overline</span>
          </div>
          <div className={classes.typo2}>
            <span style={theme.typography.body1}>Body1</span>
            <span style={theme.typography.body2}>Body2</span>
            <span style={theme.typography.button}>Button</span>
          </div>
          <br />
          <br />
          <Typography variant={'body1'} paragraph>
            Picking font is always fun but when it comes to put it together on
            to the website, it gets little tricky.
          </Typography>
          <Typography variant={'body1'} paragraph>
            I choose to use san-serif typefaces. It always give viewer (and me)
            a cleaner and professional look. But, there are thousands of
            different fonts using Sans-Serif typeface, and they don't always
            going along together.
          </Typography>
          <Typography variant={'body1'} paragraph>
            So from Google fonts, after long considerations and comparisons, I
            got 10 different font families but end up using only 6.
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography variant="overline" paragraph>
            Implementation
          </Typography>
          <Typography variant={'body1'} paragraph>
            Even though I build most of my website, I definitely did get help by
            using & implementing different packages.
          </Typography>
          <Typography variant={'body1'} paragraph>
            <b>
              FontAwesome Icons, Material-UI framework, Google Fonts, and
              Scrollspy.
            </b>
          </Typography>
          <div className={classes.iconContainer}>
            <IconButton
              color="primary"
              className={classes.iconMarginRight}
              onClick={() =>
                window.open('https://www.linkedin.com/in/sujilee91/', '_blank')
              }
            >
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </IconButton>
            <IconButton
              color="primary"
              className={classes.iconMargin}
              onClick={() =>
                window.open('https://github.com/sujilee91', '_blank')
              }
            >
              <FontAwesomeIcon icon={['fab', 'github-alt']} />
            </IconButton>
            <IconButton
              color="primary"
              className={classes.iconMargin}
              onClick={() =>
                window.open(
                  'https://www.instagram.com/sujilee_anderson/',
                  '_blank',
                )
              }
            >
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </IconButton>
            <IconButton
              color="primary"
              className={classes.iconMargin}
              onClick={() =>
                window.open('https://dribbble.com/sujilee91', '_blank')
              }
            >
              <FontAwesomeIcon icon={['fab', 'dribbble']} />
            </IconButton>
          </div>
          <Typography variant={'body1'} paragraph>
            FontAwesome allowed me to have this awesome personal connect button
            all fancy and nice. Unfortunately, Mateiral-UI icon does not
            includes any of brand icons which I hope them to add in near future.
          </Typography>
          <Typography variant={'body1'} paragraph>
            My website building got 10000 times easier by using Material UI
            frontend framework. Simple, clean,easy to use, and yet customizable
            as I wanted.
          </Typography>
          <Typography variant={'body1'} paragraph>
            On top of the materail-ui, adding Google Font made me to have more
            unique and simple website. I was able to bring the ideal website
            referenced from my resume and make it look very similar as I wanted.
          </Typography>
          <div className={classes.imageTextContianer}>
            <img src={Animation} height="200px" />
            <Typography variant={'body1'} style={{ paddingLeft: '10px' }}>
              You already may have notice by going through the website, but I
              have implemented really cool scroll animation.
              <br />
              <br />
              This idea came through when I as having rough sketch for the
              website. I never really knew how to do it, but TADA! Scrollspy
              knows how to do it. All I needed was install the packaged and add
              it on my logo badge.
              <br />
              <br />
              It end up making my website way cooler than I expected!
            </Typography>
          </div>
        </div>
      </DialogContent>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(WebV2)
