"use client"

import { NextUIProvider } from "@nextui-org/react";
import { Button, Input, Switch } from "@nextui-org/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <NextUIProvider>
            <main className={`min-h-screen p-24 ${isDarkMode ? "dark" : ""} text-foreground bg-background`}>
                
                <Switch 
                    defaultSelected 
                    onChange={() => setIsDarkMode(prev => !prev)}
                    startContent={<FontAwesomeIcon icon={faMoon} />}
                    endContent={<FontAwesomeIcon icon={faSun} />}
                />
                <Input label="username" />
                <Button color="primary">test button next ui</Button>
            </main>
        </NextUIProvider>
    );
}
