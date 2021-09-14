import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments  from './data/CompromissoHoje';

const useStyles = makeStyles(theme => ({
    btn1: {
        position:'absolute',
        right: '290px'
      },
      btn2: {
        position:'absolute',
        right: '100px'
      },
      btn3: {
        position:'absolute',
        right: '5px'
      }
}));

export default function Agenda() {
    const classes = useStyles()
    const history = useHistory()
    return(
        <div>
        <h1>Agenda</h1>
            <Paper>
                <Scheduler data={appointments} height={660}>
                <WeekView startDayHour={9} endDayHour={19} />
                <Appointments />
                </Scheduler>
            </Paper>
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
