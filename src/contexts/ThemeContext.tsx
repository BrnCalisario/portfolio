import React, { useContext, useEffect, useState } from "react"
import ThemeData, { Theme } from "../models/ThemeData"

const ThemeContext = React.createContext<ThemeData | undefined>(undefined)

ThemeContext.displayName = 'Theme'

export const useThemeContext = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error(
            'Theme Context not provided'
        )
    }

    return context
}

export default ThemeContext