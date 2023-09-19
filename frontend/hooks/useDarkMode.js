import { useState } from "react";

import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue);

    return [darkMode, setDarkMode];
};