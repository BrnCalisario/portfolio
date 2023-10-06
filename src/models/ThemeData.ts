export interface ThemeData {
    theme: Theme
    toggleTheme: () => void;
    isDark : boolean
}

export type Theme = "light" | "dark"

export default ThemeData