
type label = {
    label: string
}

export function TextoInput({ label } :label) {
    return (
        <div className="flex flex-col justify-normal mb-2">
            <label className="text-gray-700 flex-initial font-medium mb-1"> {label}</label>
            <input className="border w-64 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
        </div>
    )
}