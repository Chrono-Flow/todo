"use client"
import { SessionProvider } from "next-auth/react";

export default function Provider({ children }: { children: React.ReactNode }) {
    "use client"
    return (
        <>
            <SessionProvider>
                {children}
            </SessionProvider>
        </>
    )
}