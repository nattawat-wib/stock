"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Input, Switch } from "@nextui-org/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBell } from "@fortawesome/free-regular-svg-icons";
import { Button } from './components/button'

import { useForm, SubmitHandler } from "react-hook-form";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const {register, handleSubmit, watch} = useForm()

    return (
        <NextUIProvider>
            <main className={`min-h-screen p-24 ${isDarkMode ? "dark" : ""} text-foreground bg-background`}>
                <Switch
                    onChange={() => setIsDarkMode((prev) => !prev)}
                    startContent={<FontAwesomeIcon icon={faMoon} />}
                    endContent={<FontAwesomeIcon icon={faSun} />}
                />
                <Input label="username" />

                <Button 
                    color="warning"
                    label="login"
                    icon={faBell}
                    endIcon={faMoon}
                />
            </main>
        </NextUIProvider>
    );
}
