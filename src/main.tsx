import { StrictMode } from "react"
import { createRoot } from "react-dom/client" // Importa o createRoot do subpacote /client
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)