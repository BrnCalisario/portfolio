export interface ThemeData {
    theme: Theme
    toggleTheme: () => void;
    isDark : (theme? : Theme) => boolean
}

export type Theme = "light" | "dark"

export default ThemeData