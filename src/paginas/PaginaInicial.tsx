import { Link } from "react-router-dom"
import { Header } from "../componentes/Header"
import { FaCompass, FaSearch } from "react-icons/fa"
import type { Pessoa } from "../tipos";
import { CarrosselPessoasDesaparecidas } from "../componentes/CarrosselPessoas";

export default function Componente() {
    const pessoasDesaparecidas: Pessoa[] = [
        {
            id: 1,
            nome: "Maria Santos",
            idade: 15,
            sexo: "FEMININO",
            vivo: false,
            urlFoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
            ultimaOcorrencia: {},
        },
        {
            id: 2,
            nome: "João Oliveira",
            idade: 22,
            sexo: "MASCULINO",
            vivo: false,
            urlFoto: "https://images.unsplash.com/photo-1507003211169-0a56810a9c68?q=80&w=1974&auto=format&fit=crop",
            ultimaOcorrencia: {},
        },
        {
            id: 3,
            nome: "Pedro Souza",
            idade: 30,
            sexo: "MASCULINO",
            vivo: false,
            urlFoto: "https://images.unsplash.com/photo-1629813955627-99f694ae9e85?q=80&w=1965&auto=format&fit=crop",
            ultimaOcorrencia: {},
        },
        {
            id: 4,
            nome: "Ana Pereira",
            idade: 18,
            sexo: "FEMININO",
            vivo: false,
            urlFoto: "https://images.unsplash.com/photo-1614769062334-9333550b1d3d?q=80&w=1964&auto=format&fit=crop",
            ultimaOcorrencia: {},
        },
        {
            id: 5,
            nome: "Carlos Lima",
            idade: 45,
            sexo: "MASCULINO",
            vivo: false,
            urlFoto: "https://images.unsplash.com/photo-1557862921-37829c7909c2?q=80&w=2072&auto=format&fit=crop",
            ultimaOcorrencia: {},
        },
    ];

    return(
        <div>
            <Header/>
            <div className="flex flex-col md:flex-column justify-start items-baseline flex-wrap gap-5 p-6 bg-white  rounded-lg shadow-md">
                <h1 className="text-3xl font-bold">
                    BANCO DE PESSOAS DESAPARECIDAS
                </h1>
                <p className="text-1xl">
                    Busque por pessoas desaparecidas ou <br></br> contribua adicionando novas informações
                </p>
                <div className="flex gap-2 ">
                    <Link
                        to="/pesquisa"
                        className="bg-blue-700 hover:bg-blue-900 text-white p-3 rounded-lg mt-3 flex items-center gap-2"
                    >
                        <FaSearch /> 
                        <span>Buscar</span>
                    </Link> 
                    <Link
                        to="/explorar"
                        className="bg-white hover:bg-gray-500 text-black border-2 p-3 rounded-lg mt-3 flex items-center gap-2"
                    >
                        <FaCompass /> 
                        <span>Explorar</span>
                    </Link> 
                </div>
            </div>
            <div className="flex flex-col md:flex-column justify-start items-baseline flex-wrap gap-5 p-6 bg-gray-100  rounded-lg shadow-md">
                <div className="mt-3 text-2xl font-medium">
                    Você conhece alguma dessas pessoas?
                </div>
            </div>
            
            <CarrosselPessoasDesaparecidas pessoas={pessoasDesaparecidas} />


        </div>
    )
}