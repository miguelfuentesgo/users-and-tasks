// components/layout/Sidebar.tsx
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Sidebar.module.scss'

import { useRouter } from 'next/router'

export default function Sidebar(){
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const isActive = (path: string) => router.pathname === path
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      {/* Botón hamburguesa / cerrar en mobile */}
      <button
        className={styles.toggle}
        onClick={() => setIsOpen(prev => !prev)}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      
      <nav className={styles.nav}>
        <ul>
          <li className={ isActive("/")? styles.active: ""} >
            <Link href="/" onClick={() => setIsOpen(false)} >Inicio
            </Link>
          </li>
          <li className={ isActive("/users")? styles.active: ""} >
            <Link href="/users" onClick={() => setIsOpen(false)}>Usuarios
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}


