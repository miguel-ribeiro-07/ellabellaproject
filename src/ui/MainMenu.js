import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white'
  },
  menuLink: {
    color: theme.palette.text.primary,
    textDecoration: 'none'    // Sem sublinhado
  }
}));

export default function MainMenu() {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/" className={classes.menuLink}>Home</Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/cadastro" className={classes.menuLink}>Cadastrar cliente</Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/consulta" className={classes.menuLink}>Consultar clientes</Link>
        </MenuItem>
        
        <MenuItem onClick={handleClose}>
          <Link to="/caixa" className={classes.menuLink}>Caixa</Link>
        </MenuItem>
        
        <MenuItem onClick={handleClose}>
          <Link to="/agenda" className={classes.menuLink}>Agenda</Link>
        </MenuItem>   
      </Menu>
    </div>
  );
}