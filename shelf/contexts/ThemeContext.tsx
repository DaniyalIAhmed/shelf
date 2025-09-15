import COLORS from "@/constants/colors";
import { createContext, useContext, useState } from "react";


type ThemeContextType = {
    theme: {
        primary: string;
        textPrimary: string;
        textSecondary: string;
        textDark: string;
        placeholderText: string;
        background: string;
        cardBackground: string;
        inputBackground: string;
        border: string;
        white: string;
        black: string;
    };
    setColor: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: COLORS.FOREST,
    setColor: () => { },
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<typeof COLORS.FOREST>(COLORS.FOREST);

    const setColor = (color: string) => {
        switch (color) {
            case 'forest':
                setTheme(COLORS.FOREST);
                break;
            case 'retro':
                setTheme(COLORS.RETRO);
                break;
            case 'ocean':
                setTheme(COLORS.OCEAN);
                break;
            case 'blossom':
                setTheme(COLORS.BLOSSOM);
                break;

            default:
                break;
        }
    }
    return (
        <ThemeContext value={{ theme, setColor }}>
            {children}
        </ThemeContext>
    )
};

export const useTheme = () => {
    if (!useContext(ThemeContext)) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return useContext(ThemeContext);
}
