import type { Pessoa } from "../tipos";

type PessoaCardProps = {
  pessoa: Pessoa;
};

export function PessoaCard({ pessoa }: PessoaCardProps) {
  const status = pessoa.vivo ? "Localizado" : "Desaparecido";
  const statusColor = pessoa.vivo ? "text-green-600" : "text-red-600";

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
      <img
        src={pessoa.urlFoto || "/placeholder.jpg"}
        alt={pessoa.nome}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{pessoa.nome}</h2>
        <p className="text-gray-600">Idade: {pessoa.idade}</p>
        <p className={`mt-2 font-medium ${statusColor}`}>{status}</p>

        <p className="text-sm text-gray-500 mt-1">
          Último local: {pessoa.ultimaOcorrencia.localDesaparecimentoConcat}
        </p>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}
