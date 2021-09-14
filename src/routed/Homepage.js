import React from 'react';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    btn1: {
        position:'absolute',
        left: '290px'
      },
      btn2: {
        position:'absolute',
        left: '100px'
      },
      btn3: {
        position:'absolute',
        left: '5px'
      }
}));
export default function Home() {
    const classes = useStyles()
    const history = useHistory()
    return(
        <div>
        <h1>Homepage</h1>
            <Toolbar>
                <Button color="secondary" className={classes.btn1} variant="contained" size="large" 
                onClick={() => history.push('/cadastro')}>
                Novo Cliente
                </Button>
                <Button color="secondary" className={classes.btn2} variant="contained" size="large" 
                onClick={() => history.push('/agenda')}>
                Agendar Cliente
                </Button>
                <Button color="secondary" className={classes.btn3} variant="contained" size="large" 
                onClick={() => history.push('/caixa')}>
                Caixa
                </Button>
            </Toolbar>
        </div>
    )
};