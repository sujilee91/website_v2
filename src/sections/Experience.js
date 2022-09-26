import React, { useState } from 'react'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Title from '../component/Title'
import ExperienceTile from '../component/ExpTile'
import ExperienceCard from '../component/ExpCard'
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
  container: {
    maxWidth: '1170px',
    margin: 'auto',
  },
  resumeButton: {
    fontSize: '1rem',
    padding: '10px 30px',
    justifyContent: 'center',
  },
})

class Experiences extends React.Component {
  constructor(props, state) {
    super(props)
  }

  render() {
    const { classes } = this.props
    const skillList = {
      shiphero: [
        'ReacJS',
        'Typescript',
        'GraphQL',
        'Figma',
        'NextJS',
        'React Testing Library',
      ],
      tap: [
        'ReactJS',
        'TypeScript',
        'Material-UI',
        'SCSS',
        'Storybook JS',
        'PouchDB',
      ],
      showpass: [
        'AngularJS',
        'Bootstrap',
        'ES6',
        'SCSS',
        'Material-UI',
        'Wordpress',
        'PHP',
        'JQuery',
        'Python',
        'PostgreSQL',
        'Adobe Illustrator',
      ],
      critical: ['ReactJS', 'CMS', 'ES6', 'CSS'],
      oil: ['Bootstrap', 'Spring MVC', 'MySQL', 'JavaEE'],
    }

    return (
      <div className={classes.root} name="Experience">
        <div className={classes.container}>
          <Title value={'Experience'} />
          <Grid container={true} spacing={40}>
            <Grid item={true} xs={12} md={12}>
              <ExperienceTile
                year={'2021'}
                from={'Aug'}
                to={'April, 2022'}
                title={'Frontend Engineer - Part time'}
                company={'ShipHero - Remote Work'}
                divider={true}
                description={skillList.shiphero}
              />
              <ExperienceTile
                year={'2019'}
                from={'July'}
                to={'May, 2021'}
                title={'Frontend Engineer'}
                company={'ShipHero - Remote Work'}
                divider={true}
                description={skillList.shiphero}
              />
              <ExperienceTile
                year={'2018'}
                from={'July'}
                to={'July, 2019'}
                title={'Frontend Developer'}
                company={'PaintScout - Remote Work'}
                divider={true}
                description={skillList.tap}
              />
              <ExperienceTile
                year={'2017'}
                from={'Sept'}
                to={'July, 2018'}
                title={'Frontend UX/UI Developer'}
                company={'Showpass'}
                divider={false}
                description={skillList.showpass}
              />
              <ExperienceTile
                from={'May'}
                to={'Aug'}
                title={'Developer Intern'}
                company={'CriticalMass'}
                divider={true}
                description={skillList.critical}
              />
              <ExperienceTile
                year={'2016'}
                from={'June'}
                to={'April'}
                title={'Capstone Project'}
                company={'Oil & Gas Industry'}
                divider={false}
                description={skillList.oil}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Experiences)
