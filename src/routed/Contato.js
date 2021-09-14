import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import InputMask from 'react-input-mask'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import React from 'react'

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '80%',
    margin: '0 auto',
    '& .MuiFormControl-root': {
      minWidth: '200px',
      maxWidth: '500px',
      margin: '0 24px 24px 0'
    }
  },
  toolbar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: '36px'
  },
  btn0: {
    position:'absolute',
    right: '450px'
  },
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
  },
  btn4: {
    position:'absolute',
    left: '5px'
  }
}))

export default function ClientesForm() {
  const classes = useStyles()
  const history = useHistory()
  const estados = [
    "AC",
    "AL", 
    "AM", 
    "AP", 
    "BA", 
    "CE", 
    "DF", 
    "ES", 
    "GO", 
    "MA", 
    "MT", 
    "MS", 
    "MG", 
    "PA", 
    "PB", 
    "PR", 
    "PE", 
    "PI", 
    "RJ", 
    "RN", 
    "RO", 
    "RS", 
    "RR", 
    "SC", 
    "SE", 
    "SP", 
    "TO" 
  ]
  const formatChars = {
    '0': '[0-9]'
  }

  const cpfMask = '000.000.000-00'
  const telMask = '(00)0000-0000'
  const dataMask = '00/00/0000'
  
  return (
    <>
      <h1>Cadastrar cliente</h1>
      <form className={classes.form}>

      <InputMask
          id="cpf" 
          mask={cpfMask}
          formatChars={formatChars}
        >
          {() => <TextField 
            label="CPF" 
            variant="outlined"
            required  /* not null, precisa ser preenchido */
            fullWidth
          />}
        </InputMask>
        
        <TextField 
          id="nome" 
          label="Nome" 
          variant="outlined"
          //
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o nome"
          fullWidth
        />

        <InputMask
          id="data" 
          mask={dataMask}
          formatChars={formatChars}
        >
          {() => <TextField 
            label="Data Nascimento" 
            variant="outlined"
            required  /* not null, precisa ser preenchido */
            fullWidth
          />}
        </InputMask>

        <InputMask
          id="telefone" 
          mask={telMask}
          formatChars={formatChars}
        >
          {() => <TextField 
            label="Telefone" 
            variant="outlined"
            required  /* not null, precisa ser preenchido */
            placeholder="Informe o telefone do cliente"
            fullWidth
          />}
        </InputMask>

        <TextField 
          id="email" 
          label="E-mail" 
          variant="outlined"
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o email do cliente"
          fullWidth
        />

        <TextField 
          id="cep" 
          label="CEP" 
          variant="outlined"
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o CEP"
          fullWidth
        />

        <TextField 
          id="municipio" 
          label="Municipio" 
          variant="outlined"
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o municipio do cliente"
          fullWidth
        />

        <TextField 
          id="Rua" 
          label="Rua" 
          variant="outlined"
          required  /* not null, precisa ser preenchido */
          placeholder="Informe a rua do cliente"
          fullWidth
        />

        <TextField 
          id="num_imovel" 
          label="Nº Imóvel" 
          variant="outlined"
          //
          onFocus={event => event.target.select()}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o número da casa"
          fullWidth
          type="number"
        />

        <TextField 
          id="bairro" 
          label="Bairro" 
          variant="outlined"
          required  /* not null, precisa ser preenchido */
          placeholder="Informe a bairro do cliente"
          fullWidth
        />

        <TextField 
          id="complemento" 
          label="Complemento" 
          variant="outlined"
          //
          placeholder="Informe a complemento do cliente"
          fullWidth
        />

        <TextField 
          id="uf" 
          label="UF" 
          variant="outlined"
          required  /* not null, precisa ser preenchido */
          placeholder="Informe a uf do veículo"
          select
          fullWidth
        >
          { estados.map(estado => <MenuItem value={estado} key={estado}>{estado}</MenuItem>)}
        </TextField>

        <Toolbar className={classes.toolbar}>
          <Button type="submit" className={classes.btn4} variant="contained" color="secondary">
            Salvar
          </Button>
          <Button color="secondary" className={classes.btn0} variant="contained" size="large" 
            onClick={() => history.push('/consulta')}>
            Consulta Cliente
          </Button>
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
      </form>
    </>
  )
}