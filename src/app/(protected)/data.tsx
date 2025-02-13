"use client"

import Loading from "@/components/loading"
import { useSession } from "next-auth/react"
import { useState } from "react"

export function Data({ children }: { children: React.ReactNode }) {
    const { status, data } = useSession()
    if (status == "loading") {
        return <Loading />
    }
    return (
        <>
            {children}
        </>
    )
}   