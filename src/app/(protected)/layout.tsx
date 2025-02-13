
import Provider from "@/providers"
import { Data } from "./data"

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Provider>
                <Data children={children} />
            </Provider>
        </>
    )
}
