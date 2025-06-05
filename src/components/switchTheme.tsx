'use client'
import { useTheme } from "next-themes"
import { Switch } from "./ui/switch"
import { MoonIcon, SunIcon } from "lucide-react"
import { useState, useEffect } from "react"

const SwitchTheme = () => {
    const { theme, setTheme } = useTheme()
    const [isCheked, setIsCheked] = useState(false)

    useEffect(() => {
        setIsCheked(theme === 'dark')
    }, [theme])

    const handleChange = () => {
        setIsCheked(!isCheked)
        setTheme(isCheked ? 'light' : 'dark')
    }

    return (
        <div>
            <Switch className="drop-shadow-lg" checked={isCheked} onCheckedChange={handleChange} />
            {isCheked ? <MoonIcon /> : <SunIcon />}
        </div>
    )
}

export default SwitchTheme