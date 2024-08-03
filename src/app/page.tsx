"use client"

import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Input, Switch } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBell } from "@fortawesome/free-regular-svg-icons";
import { Button } from './components/button'
import { Checkbox } from "./components/checkbox";
import { Select } from "./components/select";
import { Modal } from "./components/modal";

export default function Home() {
    const [isDialogOpen, setIdDialogOpen] = useState(false);
    
    const mockSelect = [
        "Cat",
        "Dog",
        "Rat"
    ]

    return (
        <NextUIProvider>
            <main className={`min-h-screen p-24 ${true ? "dark" : ""} text-foreground bg-background`}>
                <Modal 
                    header="Modal"
                    isOpen={isDialogOpen}
                />
                <Switch
                    startContent={<FontAwesomeIcon icon={faMoon} />}
                    endContent={<FontAwesomeIcon icon={faSun} />}
                />
                <Button 
                    label="dialog"
                    onClick={() => setIdDialogOpen(prev => !prev)}
                />
                <Select 
                    label="Animal"
                    selectList={mockSelect}
                />
                <Checkbox label="Checkbox" />
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
