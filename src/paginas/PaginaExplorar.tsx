import React from "react";
import { Header } from "../componentes/Header";
import { PessoaCard } from "../componentes/CartaoPessoaDesaparecida";
import type { Pessoa } from "../tipos";

// Simulando os dados da API
const pessoas: Pessoa[] = [
    {
        id: 1,
        nome: "Maria Santos",
        idade: 15,
        sexo: "FEMININO",
        vivo: false,
        urlFoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
        ultimaOcorrencia: { localDesaparecimentoConcat: "São Paulo, SP" },
    },
    {
        id: 2,
        nome: "João Oliveira",
        idade: 22,
        sexo: "MASCULINO",
        vivo: false,
        urlFoto: "https://images.unsplash.com/photo-1507003211169-0a56810a9c68?q=80&w=1974&auto=format&fit=crop",
        ultimaOcorrencia: { localDesaparecimentoConcat: "Rio de Janeiro, RJ" },
    },
    {
        id: 3,
        nome: "Pedro Souza",
        idade: 30,
        sexo: "MASCULINO",
        vivo: false,
        urlFoto: "https://images.unsplash.com/photo-1629813955627-99f694ae9e85?q=80&w=1965&auto=format&fit=crop",
        ultimaOcorrencia: { localDesaparecimentoConcat: "Belo Horizonte, MG" },
    },
    {
        id: 4,
        nome: "Ana Pereira",
        idade: 18,
        sexo: "FEMININO",
        vivo: false,
        urlFoto: "https://images.unsplash.com/photo-1614769062334-9333550b1d3d?q=80&w=1964&auto=format&fit=crop",
        ultimaOcorrencia: { localDesaparecimentoConcat: "Porto Alegre, RS" },
    },
    {
        id: 5,
        nome: "Carlos Lima",
        idade: 45,
        sexo: "MASCULINO",
        vivo: false,
        urlFoto: "https://images.unsplash.com/photo-1557862921-37829c7909c2?q=80&w=2072&auto=format&fit=crop",
        ultimaOcorrencia: { localDesaparecimentoConcat: "Brasília, DF" },
    },
    {
        id: 6,
        nome: "Lúcia Almeida",
        idade: 27,
        sexo: "FEMININO",
        vivo: true,
        urlFoto: "https://images.unsplash.com/photo-1596707323287-3d6023d24294?q=80&w=1935&auto=format&fit=crop",
        ultimaOcorrencia: { localDesaparecimentoConcat: "Fortaleza, CE" },
    },
    // Adicione mais dados simulados aqui se quiser
];

export default function PaginaExplorar() {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-6 mt-8">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Explorar Pessoas Desaparecidas
                </h1>
                <p className="text-center text-gray-600 mb-10">
                    Navegue por todos os registros.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {pessoas.map(pessoa => (
                        <PessoaCard key={pessoa.id} pessoa={pessoa} />
                    ))}
                </div>
            </div>
        </div>
    );
}