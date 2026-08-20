import { useState } from "react"

const Header = () => {

    const [dark, setDark] = useState(false)

    return (
         <header className={`${dark ? "dark-theme" : ""}`}>
           <div>
            <p>C</p>
            <h1>Character Counter UTN</h1>
            </div> 
            <button onClick={() => setDark(!dark)}>☀</button>
         </header>       
    )
}

export { Header }