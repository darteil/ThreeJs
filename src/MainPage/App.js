import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1
  }
};

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = (props) => {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
