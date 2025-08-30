import { useState } from "react";
import type { FiltrosPesquisa } from "../tipos";


type Prop = {
    onSearch: (filtros: FiltrosPesquisa) => void;
}

export function BarraPesquisa( { onSearch } : Prop) {
    const [filtros, setFiltros] =  useState<FiltrosPesquisa>({
        nome: "",
        faixaIdadeInicial: "",
        faixaIdadeFinal: "",
        status: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value } = e.target;

        setFiltros(prevFiltros => ({
            ...prevFiltros,
            [name]: value
        }));
    };

    const handleSearchClick = () => {
        onSearch(filtros)
    }

    return(
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-md">
            <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={filtros.nome}
                onChange={handleInputChange}
                className="p-2 border rounded-md"
            />
            <input
                type="number"
                name="faixaIdadeInicial"
                placeholder="Idade Inicial"
                value={filtros.faixaIdadeInicial}
                onChange={handleInputChange}
                className="p-2 border rounded-md"
            />
            <input
                type="number"
                name="faixaIdadeFinal"
                placeholder="Idade Final"
                value={filtros.faixaIdadeFinal}
                onChange={handleInputChange}
                className="p-2 border rounded-md"
            />
            <select
                name="sexo"
                value={filtros.sexo}
                onChange={handleInputChange}
                className="p-2 border rounded-md"
            >
                <option value="">Sexo</option>
                <option value="MASCULINO">Masculino</option>
                <option value="FEMININO">Feminino</option>
            </select>
            <button
                onClick={handleSearchClick}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
                Pesquisar
            </button>
        </div>
    );
}