import AdminNavbar from "@/Components/navbar/admin-navbar";
import { usePage } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    const {admin}  = usePage().props;
  
    return (
        <div className="h-screen">
            <AdminNavbar admin={admin}/>
            <div>
                {children}
            </div>
        </div>
    );
}
