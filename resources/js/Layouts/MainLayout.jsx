import Navbar from "@/Components/navbar/navbar";


export default function MainLayout({ children }) {

    return (
        <div className="h-screen ">
            <Navbar />
            <div>
               {children} 
            </div>
            
        </div>
    );
}
