import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import First from "./First.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.css";



createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App /> 
    </StrictMode>
)


//createRoot(document.getElementById("root")).render(<First />)
