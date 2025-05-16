import React from 'react'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gestión de Usuarios y Tareas</h1>
      <p className={styles.description}>
        Bienvenido a tu mini plataforma para listar usuarios y administrar tareas.
      </p>
    </div>
  )
}
