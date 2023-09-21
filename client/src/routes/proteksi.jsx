import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Proteksi({ children, adminPage, cashierPage }) {

    const user = {
        username: 'bayu',
        role: 'Cashier'
    }

    const nav = useNavigate()

    useEffect(() => {
        if (user.role === 'Cashier' && adminPage) return nav('/')
        if (user.role === 'Admin' && cashierPage) return nav('/admin')

    }, [children])

    return (
        <>
            {children}
        </>
    )


}