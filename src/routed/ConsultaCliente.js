import { useState} from 'react'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid'
import TextField from '@material-ui/core/TextField'
import InputMask from 'react-input-mask'

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  dataGrid: {
    '& .MuiDataGrid-row button': {
      visibility: 'hidden'
    },
    '& .MuiDataGrid-row:hover button': {
      visibility: 'visible'
    },
    '& .super-app-theme--header': {
      backgroundColor: theme.palette.secondary.main ,
      color: "white"
    }
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
  tit1: {
    color:'white',
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function ClientesList() {
  const classes = useStyles()

  const formatChars = {
    '0': '[0-9]'
  }
  const cpfMask = '000.000.000-00'
  const history = useHistory()


  const [dados, setDados] = useState([])
  const [hist, setHist] = useState([])
  const columnsdados = [
    { 
      field: 'nome', 
      headerName: 'Nome',
      headerClassName:'super-app-theme--header',
      flex: true 
    },
    { 
      field: 'Data Nascimento', 
      headerName: 'Data Nascimento',
      headerClassName:'super-app-theme--header',
      align: 'center',
      headerAlign: 'center', 
      flex: true,
    },
    { 
      field: 'telefone', 
      headerName: 'Telefone',
      headerClassName:'super-app-theme--header',
      align: 'center', 
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'email', 
      headerName: 'Email',
      headerClassName:'super-app-theme--header',
      align: 'center', 
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'municipio', 
      headerName: 'Município',
      headerClassName:'super-app-theme--header',
      align: 'center', 
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'rua', 
      headerName: 'Rua',
      headerClassName:'super-app-theme--header',
      align: 'center', 
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'num_imovel', 
      headerName: 'Nº Imovel',
      headerClassName:'super-app-theme--header',
      align: 'center', 
      headerAlign: 'center', 
      flex: true,
      sortComparator: (v1, v2) => Number(v1) > Number(v2) ? 1 : -1
    },
    { 
      field: 'bairro', 
      headerName: 'Bairro',
      headerClassName:'super-app-theme--header',
      align: 'right', 
      headerAlign: 'center',
      flex: true,
    },
    { 
      field: 'complemento', 
      headerName: 'Complemento',
      headerClassName:'super-app-theme--header',
      align: 'center', 
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'uf', 
      headerName: 'UF',
      headerClassName:'super-app-theme--header',
      align: 'center', 
      headerAlign: 'center', 
      flex: true 
    }];

    const columnshist = [
      { 
        field: 'servico', 
        headerName: 'Serviço',
        headerClassName:'super-app-theme--header',
        align: 'center',
        headerAlign: 'center', 
        flex: true,
      },
      { 
        field: 'data', 
        headerName: 'Data',
        headerClassName:'super-app-theme--header',
        align: 'center',
        headerAlign: 'center', 
        flex: true,
      },
      { 
        field: 'horario', 
        headerName: 'Horário',
        headerClassName:'super-app-theme--header',
        align: 'center',
        headerAlign: 'center', 
        flex: true,
      },
      { 
        field: 'valor', 
        headerName: 'Valor',
        headerClassName:'super-app-theme--header',
        align: 'center',
        headerAlign: 'center', 
        flex: true,
      },
      { 
        field: 'observacao', 
        headerName: 'Observação',
        headerClassName:'super-app-theme--header',
        align: 'center',
        headerAlign: 'center', 
        flex: true,
      }];

  return (
    <>
      <h1>Consultar cliente</h1>
      <InputMask
          id="cpf" 
          mask={cpfMask}
          formatChars={formatChars}
        >
          {() => <TextField 
            label="CPF" 
            variant="outlined"
            required  /* not null, precisa ser preenchido */
          />}
      </InputMask>
        <h2 align="center">Dados Cliente</h2>
        <DataGrid className={classes.dataGrid} rows={dados} columns={columnsdados} pageSize={10} autoHeight={true} disableSelectionOnClick={true} />
        <h2 align="center" className={classes.tit1}>Histórico do cliente</h2>
        <DataGrid className={classes.dataGrid} rows={hist} columns={columnshist} pageSize={10} autoHeight={true} disableSelectionOnClick={true} />
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
    </>
  )
}