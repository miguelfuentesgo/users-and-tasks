import React from 'react'
import styles from '@/styles/Home.module.scss'
import { Button } from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Home() {


  const createData = (name, age, country) => {
    return { name, age, country };
  };
  
  const rows = [
    createData('John Doe', 25, 'USA'),
    createData('Jane Smith', 30, 'UK'),
    createData('Carlos Rodríguez', 35, 'Colombia'),
    createData('Maria González', 28, 'Spain'),
  ];
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gestión de Usuarios y Tareas</h1>
      <p className={styles.description}></p>

        Bienvenido a tu mini plataforma para listar usuarios y administrar tareas.

        <Button variant='contained' color='primary' href='/users' className={styles.button}>
          Ir a Usuarios
        </Button>

        <TableContainer component={Paper} className={styles.tableusers}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Edad</TableCell>
            <TableCell align="right">País</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age} </TableCell>
              <TableCell align="right">{row.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        <Table />
      
    </div>
  )
}
