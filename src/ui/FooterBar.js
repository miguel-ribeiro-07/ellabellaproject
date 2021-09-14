import { Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: 'black',
    minHeight: '35px',
    // Posicionamento do footer na parte inferior da página
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
  text: {
    color: 'white',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    fontSize: '17px'
  },
  link: {
    color: theme.palette.secondary.light,
    textDecoration: 'none',  // tira o sublinhado do link
    '&:hover': {  // mouse sobre o link
    textDecoration: 'underline' // retorna o sublinhado
    }
  }
}));

export default function FooterBar() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      <Typography className={classes.text} variant="caption" display="block" align="center" color="textSecondary">
        Desenvolvido por <a className={classes.link} href="mailto:miguel201060@hotmail.com">Miguel Ribeiro</a>
      </Typography>
    </Toolbar>
  )
}