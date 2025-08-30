export type Cartaz = {
    urlCartaz: string;
    tipoCartaz: string; 
  };
  
  export type OcorrenciaEntrevDesapDTO = {
    informacao: string;
    vestimentasDesaparecido: string;
  };
  
  export type UltimaOcorrencia = {
    dtDesaparecimento: string; 
    dataLocalizacao: string;   
    encontradoVivo: boolean;
    localDesaparecimentoConcat: string;
    ocorrenciaEntrevDesapDTO: OcorrenciaEntrevDesapDTO;
    listaCartaz: Cartaz[];
    ocoId: number;
  };
  
  export type Pessoa = {
    id: number;
    nome: string;
    idade: number;
    sexo: "MASCULINO" | "FEMININO";
    vivo: boolean;
    urlFoto: string;
    ultimaOcorrencia: UltimaOcorrencia;
  };
  

export type SortObject = {
unsorted: boolean;
sorted: boolean;
empty: boolean;
};

export type ObjetoPaginavel = {
unpaged: boolean;
pageNumber: number; 
paged: boolean;
pageSize: number; 
offset: number;   
sort: SortObject;
};

export type PagePessoaDto = {
totalElements: number;
totalPages: number;
pageable: ObjetoPaginavel;
numberOfElements: number;
first: boolean;
last: boolean;
content: Pessoa[];
number: number;
sort: SortObject;
empty: boolean;
};

export type FiltrosPesquisa = {
  nome: string,
  faixaIdadeInicial: string,
  faixaIdadeFinal: string,
  sexo?: "MASCULINO" | "FEMININO",
  status: string,
}

