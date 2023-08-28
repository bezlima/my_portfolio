import { useTheme } from 'next-themes'

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme()

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                checked={theme === 'dark' ? true : false}
            />
            <div className="w-11 h-6 bg-black dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:peer-checked:bg-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
        </label>
    )
}
