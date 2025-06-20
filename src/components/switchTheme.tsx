'use client'
import { useTheme } from "next-themes"
import { Switch } from "./ui/switch"
import { MoonIcon, SunIcon } from "lucide-react"
import { useState, useEffect } from "react"

const SwitchTheme = () => {
    const { theme, setTheme } = useTheme()
    const [isChecked, setIsCheked] = useState(false)

    useEffect(() => {
        setIsCheked(theme === 'dark')
    }, [theme])

    const handleChange = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIsCheked(!isChecked);
    };

    return (
        <div className="flex gap-2 items-center">
            <Switch className="drop-shadow-lg" checked={isChecked} onCheckedChange={handleChange} />
            {isChecked ?
                <MoonIcon className="text-primary drop-shadow-lg" /> :
                <SunIcon className="text-primary drop-shadow-lg" />
            }
        </div>
    )
}

export default SwitchTheme