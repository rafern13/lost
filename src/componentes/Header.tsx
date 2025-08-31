import React from "react";

export function Header() {
    return(
        <header className='bg-blue-600 text-white p-4 shadow-md'>
           <div className="container mx-auto flex items-center">
                <h1 className="text-2xl font-bold">Desaparecimentos - API Polícia</h1>
           </div>
        </header>
    )
}