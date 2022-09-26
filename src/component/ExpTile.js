import React from 'react'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import customTheme from '../styles/theme'

const styles = (customTheme) => ({
  root: {
    paddingLeft: '25px',
    paddingRight: '25px',
    [customTheme.breakpoints.down('sm')]: {
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  },
  verticalDivider: {
    width: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    height: '90%',
    margin: 'auto',
  },
  vdContainer: {
    display: 'flex',
    verticalAlign: 'middle',
  },
  divider: {
    marginTop: '15px',
    marginBottom: '15px',
  },
  hiddenDivider: {
    marginTop: '8px',
    marginBottom: '8px',
    height: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  company: {
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  title: {
    [customTheme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  year: {
    [customTheme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  description: {
    [customTheme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
})

const ExperienceTile = (props) => {
  const {
    classes,
    year,
    from,
    to,
    company,
    description,
    title,
    divider,
    onClick,
  } = props

  return (
    <MuiThemeProvider theme={customTheme}>
      <div className={classes.root} onClick={onClick}>
        <Grid container spacing={8}>
          <Grid item sm={2} xs={3}>
            {year && (
              <Typography className={classes.year} variant={'h5'}>
                {year}
              </Typography>
            )}
            {(from || to) && (
              <Typography
                className={classes.date}
                style={customTheme.typography.subtitle2}
              >
                {from} - {to}
              </Typography>
            )}
          </Grid>
          <Grid item sm={2} xs={1} className={classes.vdContainer}>
            <div className={classes.verticalDivider} />
          </Grid>
          <Grid item sm={8} xs={8} className={classes.descCard}>
            {title && (
              <Typography className={classes.title} variant={'h5'}>
                {title}
              </Typography>
            )}
            {company && (
              <Typography
                className={classes.company}
                style={customTheme.typography.subtitle1}
              >
                {company}
              </Typography>
            )}
            {description && (
              <Typography className={classes.description} variant={'body1'}>
                {description.map((desc) => {
                  return desc + ' / '
                })}
              </Typography>
            )}
          </Grid>
        </Grid>
        {divider && <Divider className={classes.divider} />}
        {!divider && <Divider className={classes.hiddenDivider} />}
      </div>
    </MuiThemeProvider>
  )
}
export default withStyles(styles)(ExperienceTile)
