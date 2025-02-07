import { toast } from "react-hot-toast";


export const NOTIFICATION_TYPE = {
    error: 'error',
    warning: 'warning',
    success: 'success',
    info: 'info',
}


export default function useNotifyHook() {

    const toastMessgae = (message, title, { leading, type }) => {


        if (type === NOTIFICATION_TYPE.error) {

            return toast.custom((t) => (

                <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} shadow-red-500  bg-red-500 p-3 md:w-[25vw] shadow-sm rounded overflow-hidden pointer-events-auto flex space-x-3 ring-1 ring-black ring-opacity-5 z-50 relative`}>
                    <div className={`flex flex-row space-x-3 flex-1`}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-900">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1 test-sm">
                            <h3 className={`text-red-900 text-sm font-medium`}> {title}</h3>
                            <p className="text-red-100 text-sm font-medium mt-1">{message}</p>
                        </div>
                    </div>
                    <button onClick={() => toast.dismiss(t.id)} className="p-1  shrink-0  h-10 w-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

            ))
        }

        else if (type === NOTIFICATION_TYPE.success) {
            return toast.custom((t) => (

                <div className={`${t.visible ? 'animate-enter' : 'animate-leave'}   bg-green-500 p-3 md:w-[25vw] shadow-sm rounded pointer-events-auto flex space-x-3 ring-1 ring-black ring-opacity-5 z-50 relative`}>
                    <div className={`flex flex-row space-x-3 flex-1`}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-900">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1 test-sm">
                            <h3 className={`text-green-900 text-sm font-medium`}> {title}</h3>
                            <p className="text-green-100 text-sm font-medium mt-1">{message}</p>
                        </div>
                    </div>
                    <button onClick={() => toast.dismiss(t.id)} className="p-1  shrink-0  h-10 w-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

            ))
        }

        else if (type === NOTIFICATION_TYPE.warning) {
            return toast.custom((t) => (

                <div className={`${t.visible ? 'animate-enter' : 'animate-leave'}   bg-green-500 p-3 md:w-[25vw] shadow-sm rounded pointer-events-auto flex space-x-3 ring-1 ring-black ring-opacity-5 z-50 relative`}>
                    <div className={`flex flex-row space-x-3 flex-1`}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-900">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1 test-sm">
                            <h3 className={`text-green-900 text-sm font-medium`}> {title}</h3>
                            <p className="text-green-100 text-sm font-medium mt-1">{message}</p>
                        </div>
                    </div>
                    <button onClick={() => toast.dismiss(t.id)} className="p-1  shrink-0  h-10 w-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

            ))
        }

        else if (type === NOTIFICATION_TYPE.info) {
            return toast.custom((t) => (

                <div className={`${t.visible ? 'animate-enter' : 'animate-leave'}   bg-green-500 p-3 md:w-[25vw] shadow-sm rounded pointer-events-auto flex space-x-3 ring-1 ring-black ring-opacity-5 z-50 relative`}>
                    <div className={`flex flex-row space-x-3 flex-1`}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-900">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1 test-sm">
                            <h3 className={`text-green-900 text-sm font-medium`}> {title}</h3>
                            <p className="text-green-100 text-sm font-medium mt-1">{message}</p>
                        </div>
                    </div>
                    <button onClick={() => toast.dismiss(t.id)} className="p-1  shrink-0  h-10 w-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

            ))
        }

    }

    return toastMessgae;
}