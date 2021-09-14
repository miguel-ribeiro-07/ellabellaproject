import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logotipo from '../img/logotipo.png'
import nome from '../img/ellabella.png'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import MainMenu from './MainMenu.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: '50px'
  },
  nome: {
    width: '150px',
    position:'absolute',
    left: '175px'
  },
  exit: {
    width:'50px',
    position: 'absolute',
    right: '10px'
  }
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MainMenu />
          <img src={logotipo} className={classes.logo} alt="Logotipo" />
          <img src={nome} className={classes.nome} alt="Ella Bella" />
          {/*<img src={logout} className={classes.exit} alt="Exit" />*/}
          <ExitToAppOutlinedIcon className={classes.exit}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}