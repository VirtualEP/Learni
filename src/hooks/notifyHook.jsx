import { toast } from "react-hot-toast";

export default function useNotifyHook() {
    const toastMessgae = (message, title, { leading, color }) => {
        console.log(color)
        return toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full ${color =='' ? `bg-red-100` : 'bg-white'} shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 z-50`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        {leading && <div className="flex-shrink-0 pt-0.5">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                            />
                        </div>}
                        <div className={`${leading && 'ml-3'} flex-1`}>
                            <p className={`text-sm font-medium ${color ? 'text-' + color + '-900' : 'text-gray-900'}`}>
                                {title}
                            </p>
                            <p className={`mt-1 text-sm ${color ? 'text-' + color + '-500' : 'text-gray-500'}`}>
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        ))
    }

    return toastMessgae;
}