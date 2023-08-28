import Container from "@/Components/container";
import EmptyState from "@/Components/empty-state";
import Listings from "@/Components/listing/listings";
import SelectMap from "@/Components/map/map";
import LoginModal from "@/Components/modal/login-modal";
import RegisterModal from "@/Components/modal/register-modal";
import RentModal from "@/Components/modal/rent-modal";
import Filters from "@/Components/navbar/filters";
import MainLayout from "@/Layouts/MainLayout";
import { getListings } from "@/api/getListings";
import ToastProvider from "@/provider/toast-provider";
import { Head } from "@inertiajs/react";
import { useState } from "react";


export default function Home(props) {
 
    const {listings, categories} = props;
    const isEmpty = listings?.length == 0
    console.log(props);
    const [select, setSelect] = useState(null);

    return (
        <div className='
        relative 
        max-h-screen 
        overflow-y-hidden
        overflow-x-hidden'>
            <Head title="RealState" />
            
            
            <RentModal />
            <LoginModal />
            <RegisterModal />
            <ToastProvider />
            <MainLayout>
                <div className="pt-20">
                <Filters />
                    {
                        isEmpty 
                        ?(<Container>
                            <EmptyState showReset/>
                        </Container>)
                        :(<div className='grid h-full  lg:grid-cols-2 grid-cols-1  gap-10 lg:gap-0'>
                            <div className="h-[82vh] overflow-y-auto ">
                                <Listings
                                listings={listings} 
                                select={select}
                                setSelect={setSelect}
                                />
                            </div>
                            <div className="lg:flex hidden">
                                <SelectMap listings={listings} value={select}/>
                            </div>
                        </div>)
                    }
                </div>
            </MainLayout>
        </div>
    );
}
