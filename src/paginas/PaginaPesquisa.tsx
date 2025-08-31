import { useEffect, useState } from "react";
import type { FiltrosPesquisa, PagePessoaDto } from "../tipos";
import { PessoaCard } from "../componentes/CartaoPessoaDesaparecida";
import { Header } from "../componentes/Header";
import { BarraPesquisa } from "../componentes/BarraPesquisa"; 
import EsqueletoCard from "../componentes/EsqueletoCard";

console.log("carregou pesquisa")

export default function Componente() {

  const [people, setPeople] = useState<PagePessoaDto>();
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<FiltrosPesquisa>({
    nome: "",
    faixaIdadeInicial: "",
    faixaIdadeFinal: "",
    status: "",
  });

  useEffect(() => {
    setisLoading(true);
    const params = new URLSearchParams();
    if (filters.nome) {
      params.append("nome", filters.nome);
    }
    if (filters.status) {
      params.append("status", filters.status);
    }
    if (filters.faixaIdadeInicial) {
      params.append("faixaIdadeInicial", String(filters.faixaIdadeInicial));
    }
    if (filters.faixaIdadeFinal) {
      params.append("faixaIdadeFinal", String(filters.faixaIdadeFinal));
    }
    
    console.log(params)

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
    <div className="min-h-screen bg-white">
      <Header />
      <div className="p-6">
        {/* <h1 className="text-2xl font-bold mb-6 text-left">
          Registros de Pessoas Desaparecidas
        </h1> */}
        <BarraPesquisa onSearch={handleSearch} />

        {isLoading ? (
          <div className="grid grid-cols-1 mb-4 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[...Array(10)].map((_, index) => (
              <EsqueletoCard key={index} />
            ))}
        </div>
        ) : (
          <div className="grid grid-cols-1 mb-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {people?.content.length != null ? (
              people?.content.map((pessoa) => (
                <PessoaCard key={pessoa.id} pessoa={pessoa} />
              ))
            ) : (
              <p className="col-span-full text-center mt-2 text-gray-500">Nenhum registro encontrado.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}