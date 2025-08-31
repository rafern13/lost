import { useParams, useNavigate } from "react-router-dom";
import type { Pessoa } from "../tipos";
import { FaArrowLeft, FaShareAlt } from "react-icons/fa";

interface PessoaDetalhesProps {
  pessoas: Pessoa[];
}

export default function PessoaDetalhes({ pessoas }: PessoaDetalhesProps) {
  const { id } = useParams();
  const navigate = useNavigate();

  const pessoa: Pessoa = {
    id: 1,
    nome: "João da Silva",
    idade: 32,
    sexo: "MASCULINO",
    vivo: false,
    urlFoto: "https://via.placeholder.com/200x200.png?text=Joao+da+Silva",
    ultimaOcorrencia: {
      dtDesaparecimento: "2024-07-15T00:00:00Z",
      dataLocalizacao: "2024-08-02T00:00:00Z",
      encontradoVivo: false,
      localDesaparecimentoConcat: "Praça Central, Cuiabá - MT",
      ocorrenciaEntrevDesapDTO: {
        informacao:
          "Foi visto pela última vez saindo de um bar na Praça Central às 23h.",
        vestimentasDesaparecido:
          "Camiseta azul, calça jeans preta e tênis branco.",
      },
      listaCartaz: [
        {
          urlCartaz:
            "https://via.placeholder.com/400x600.png?text=Cartaz+Joao+1",
          tipoCartaz: "Cartaz Oficial",
        },
        {
          urlCartaz:
            "https://via.placeholder.com/400x600.png?text=Cartaz+Joao+2",
          tipoCartaz: "Cartaz Comunitário",
        },
      ],
      ocoId: 101,
    },
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <FaArrowLeft /> Voltar
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-6">
        <img
          src={pessoa.urlFoto}
          alt={pessoa.nome}
          className="w-48 h-48 object-cover rounded-2xl shadow-md"
        />

        <h1 className="text-3xl font-bold text-center">{pessoa.nome}</h1>
        <span
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            pessoa.vivo
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {pessoa.vivo ? "Localizado com vida" : "Não localizado / falecido"}
        </span>

        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <p className="text-gray-500 text-sm">Idade</p>
            <p className="text-lg font-semibold">{pessoa.idade} anos</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Sexo</p>
            <p className="text-lg font-semibold">{pessoa.sexo}</p>
          </div>
        </div>

        <div className="w-full mt-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Última ocorrência</h2>
          <ul className="space-y-1 text-gray-700">
            <li>
              <strong>Data do desaparecimento:</strong>{" "}
              {new Date(pessoa.ultimaOcorrencia.dtDesaparecimento).toLocaleDateString("pt-BR")}
            </li>
            <li>
              <strong>Local:</strong> {pessoa.ultimaOcorrencia.localDesaparecimentoConcat}
            </li>
            {pessoa.ultimaOcorrencia.dataLocalizacao && (
              <li>
                <strong>Data da localização:</strong>{" "}
                {new Date(pessoa.ultimaOcorrencia.dataLocalizacao).toLocaleDateString("pt-BR")}
              </li>
            )}
            <li>
              <strong>Encontrado vivo:</strong>{" "}
              {pessoa.ultimaOcorrencia.encontradoVivo ? "Sim" : "Não"}
            </li>
          </ul>
        </div>

        {/* Detalhes adicionais */}
        <div className="w-full mt-6 text-left">
          <h2 className="text-xl font-semibold mb-2">Detalhes</h2>
          <p>
            <strong>Vestimentas:</strong>{" "}
            {pessoa.ultimaOcorrencia.ocorrenciaEntrevDesapDTO?.vestimentasDesaparecido ||
              "Não informado"}
          </p>
          <p>
            <strong>Informações adicionais:</strong>{" "}
            {pessoa.ultimaOcorrencia.ocorrenciaEntrevDesapDTO?.informacao || "Não informado"}
          </p>
        </div>

        {/* Cartazes */}
        {pessoa.ultimaOcorrencia.listaCartaz && pessoa.ultimaOcorrencia.listaCartaz.length > 0 && (
          <div className="w-full mt-6 text-left">
            <h2 className="text-xl font-semibold mb-4">Cartazes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pessoa.ultimaOcorrencia.listaCartaz.map((c, idx) => (
                <div
                  key={idx}
                  className="border rounded-lg overflow-hidden shadow-sm"
                >
                  <img
                    src={c.urlCartaz}
                    alt={c.tipoCartaz}
                    className="w-full object-cover"
                  />
                  <p className="p-2 text-sm text-gray-600 text-center">
                    {c.tipoCartaz}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botões de ação */}
        <div className="flex gap-4 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            <FaShareAlt /> Compartilhar
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            Enviar informação
          </button>
        </div>
      </div>
    </div>
  );
}
