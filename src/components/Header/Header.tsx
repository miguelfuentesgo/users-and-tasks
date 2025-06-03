import styles from "@/components/Header/Header.module.scss"
import { useRouter } from "next/router"

export default function Header() {
  
    const router = useRouter()
    const isActive = (path: string) => router.pathname === path

    const getTitle = () => {
        if (isActive("/")) return "Inicio"
        if (isActive("/users")) return "Usuarios"
        return "Gestión de Usuarios y Tareas"
    }   
    return (
        <div className={styles.header}>
            <h3> 
                { getTitle() } </h3>
        </div>
    )
}