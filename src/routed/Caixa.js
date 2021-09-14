import { useState} from 'react'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useHistory } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid'

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
      backgroundColor: 'green' ,
      color: "white"
    },
    '& .super-app-theme--header1': {
      backgroundColor: 'red' ,
      color: "white"
    },
    '& .super-app-theme--header2': {
      backgroundColor: 'black' ,
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
  }
}));

export default function ClientesList() {
  const classes = useStyles()
  const history = useHistory()


  const [entradas, setEntradas] = useState([])
  const [saidas, setSaida] = useState([])
  const [saldo, setSaldo] = useState([])

  const columns_entrada = [
    { 
      field: 'servico', 
      headerName: 'Serviço',
      headerClassName:'super-app-theme--header',
      align: 'center',
      headerAlign: 'center', 
      flex: true,
    },
    { 
      field: 'dia1',
      headerName: '01/09/2021',
      headerClassName:'super-app-theme--header',
      flex: true 
    },
    { 
      field: 'dia2',
      headerName: '02/09/2021',
      headerClassName:'super-app-theme--header',
      align: 'center',
      headerAlign: 'center', 
      flex: true,
    },
    { 
      field: 'dia3',
      headerName: '03/09/2021',
      headerClassName:'super-app-theme--header',
      align: 'center', 
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'dia4',
      headerName: '04/09/2021',
      headerClassName:'super-app-theme--header',
      align: 'center', 
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'dia5',
      headerName: '05/09/2021',
      headerClassName:'super-app-theme--header',
      align: 'center', 
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'dia6',
      headerName: '06/09/2021',
      headerClassName:'super-app-theme--header',
      align: 'center', 
      headerAlign: 'center', 
      flex: true 
    },
    { 
      field: 'dia7',
      headerName: '07/09/2021',
      headerClassName:'super-app-theme--header',
      align: 'right', 
      headerAlign: 'center',
      flex: true,
    }];

    const columns_saida = [
      { 
        field: 'tipo_gasto', 
        headerName: 'Tipo de Gasto',
        headerClassName:'super-app-theme--header1',
        align: 'center',
        headerAlign: 'center', 
        flex: true,
      },
      { 
        field: 'dia1',
        headerName: '01/09/2021',
        headerClassName:'super-app-theme--header1',
        flex: true 
      },
      { 
        field: 'dia2',
        headerName: '02/09/2021',
        headerClassName:'super-app-theme--header1',
        align: 'center',
        headerAlign: 'center', 
        flex: true,
      },
      { 
        field: 'dia3',
        headerName: '03/09/2021',
        headerClassName:'super-app-theme--header1',
        align: 'center', 
        headerAlign: 'center', 
        flex: true 
      },
      { 
        field: 'dia4',
        headerName: '04/09/2021',
        headerClassName:'super-app-theme--header1',
        align: 'center', 
        headerAlign: 'center', 
        flex: true 
      },
      { 
        field: 'dia5',
        headerName: '05/09/2021',
        headerClassName:'super-app-theme--header1',
        align: 'center', 
        headerAlign: 'center', 
        flex: true 
      },
      { 
        field: 'dia6',
        headerName: '06/09/2021',
        headerClassName:'super-app-theme--header1',
        align: 'center', 
        headerAlign: 'center', 
        flex: true 
      },
      { 
        field: 'dia7',
        headerName: '07/09/2021',
        headerClassName:'super-app-theme--header1',
        align: 'right', 
        headerAlign: 'center',
        flex: true,
      }];
      const columns_saldo = [
        { 
          field: 'total_entrada', 
          headerName: 'Entrada',
          headerClassName:'super-app-theme--header2',
          align: 'center',
          headerAlign: 'center', 
          flex: true,
        },
        { 
          field: 'total_saida',
          headerName: 'Saida',
          headerClassName:'super-app-theme--header2',
          align: 'center',
          headerAlign: 'center', 
          flex: true,
        },
        { 
          field: 'saldo',
          headerName: 'Saldo geral',
          headerClassName:'super-app-theme--header2',
          align: 'center',
          headerAlign: 'center', 
          flex: true,
        }];


  return (
    <>
      <h1>Caixa</h1>
        <h2 align="center">Entradas</h2>
        <DataGrid className={classes.dataGrid} rows={entradas} columns={columns_entrada} pageSize={10} autoHeight={true} disableSelectionOnClick={true} />
        <h2 align="center">Saídas</h2>
        <DataGrid className={classes.dataGrid} rows={saidas} columns={columns_saida} pageSize={10} autoHeight={true} disableSelectionOnClick={true} />
        <h2 align="center">Balanço geral</h2>
        <DataGrid className={classes.dataGrid} rows={saldo} columns={columns_saldo} pageSize={10} autoHeight={true} disableSelectionOnClick={true} />
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