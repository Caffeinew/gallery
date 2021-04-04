
export default function alert({text}) {
    return (
        <div className="fixed top-4 right-0 px-8 py-4 shadow z-10 bg-blue-400 text-gray-100 alert">
            {text}
        </div>
    )
}
