import { useEffect, useState } from "react";
import type { FiltrosPesquisa, PagePessoaDto } from "../tipos";
import { PessoaCard } from "../componentes/CartaoPessoaDesaparecida";
import { Header } from "../componentes/Header";
import { BarraPesquisa } from "../componentes/BarraPesquisa"; 

export default function Componente() {
  const [people, setPeople] = useState<PagePessoaDto>();
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState({ nome: "", status: "" });

  useEffect(() => {
    setisLoading(true);
    const params = new URLSearchParams();
    if (filters.nome) {
      params.append("nome", filters.nome);
    }
    if (filters.status) {
      params.append("status", filters.status);
    }
    
    fetch(`https://abitus-api.geia.vip/v1/pessoas/aberto/filtro?${params.toString()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Falha na requisição");
        }
        return res.json();
      })
      .then((data: PagePessoaDto) => {
        setPeople(data);
        setisLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar API:", err);
        setisLoading(false);
      });
       
  }, [filters]); 

  const handleSearch = (newFilters: FiltrosPesquisa) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Registros de Pessoas Desaparecidas
        </h1>
        <BarraPesquisa onSearch={handleSearch} />

        {isLoading ? (
          <p className="text-center text-gray-500">Carregando...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {people?.content.length != null ? (
              people?.content.map((pessoa) => (
                <PessoaCard key={pessoa.id} pessoa={pessoa} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">Nenhum registro encontrado.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}