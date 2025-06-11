'use client'

export const Trigger = ({ onClick, className }
    : {
        onClick: () => void,
        className?: string
    }
) => {
    return (
        <span className={"md:hover:scale-105 active:scale-105 transition-transform duration-200 ease-in-out bg-gradient-to-r from-emerald-700 via-cyan-700 to-primary/90 text-slate-50 shadow-lg hover:from-emerald-600 hover:via-cyan-600 hover:to-primary/80 active:from-emerald-600 active-via-cyan-600 active:to-primary/80 rounded-md p-2 " + className} onClick={onClick}>
            Ver Libros
        </span>
    )
}