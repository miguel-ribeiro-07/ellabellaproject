import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//import cor1 from '@material-ui/core/colors/pink';
//import cor2 from '@material-ui/core/colors/blue';
import TopBar from './ui/TopBar'
import FooterBar from './ui/FooterBar'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './routed/Homepage'
import ConsultaCliente from './routed/ConsultaCliente'
import CadastroCliente from './routed/CadastroCliente'
import Caixa from './routed/Caixa'
import Agenda from './routed/Agenda'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F361E5',
    },
    secondary: {
      main: '#9B038C',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.default,
    paddingBottom: '42px',
    minHeight: '100vh' 
  },
  routed: {
    padding: '25px',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily
  }
}))

function Main() {
  const classes = useStyles()
  return (
    <Box className={classes.main}>
      <BrowserRouter>
      <TopBar />
        <Box id="routed" className={classes.routed}>
          <Switch>
            <Route path="/consulta">
              <ConsultaCliente/>
            </Route>

            <Route path="/cadastro">
              <CadastroCliente/>
            </Route>

            <Route path="/caixa">
              <Caixa/>
            </Route>

            <Route path="/agenda">
              <Agenda/>
            </Route>

            <Route path="/">
              <Homepage/>
            </Route>

          </Switch>
        </Box>
        <FooterBar />
      </BrowserRouter>
    </Box>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
