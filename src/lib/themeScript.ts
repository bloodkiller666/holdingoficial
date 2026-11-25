/**
 * Script que se ejecuta antes de pintar (solo lo renderiza el servidor, en el layout) para evitar el parpadeo del tema.
 * Va fuera de un componente cliente: React 19 no admite crear `<script>` al renderizar en el navegador.
 */
export const THEME_KEY = "theme";
export const THEME_SCRIPT = `try{var t=localStorage.getItem("${THEME_KEY}")||"system";var d=t==="dark"||(t==="system"&&matchMedia("(prefers-color-scheme: dark)").matches);var c=document.documentElement.classList;d?c.add("dark"):c.remove("dark");document.documentElement.style.colorScheme=d?"dark":"light"}catch(e){}`;
