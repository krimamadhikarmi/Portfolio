'use client';
import { useSearchParams } from "next/navigation";

const service = () =>{
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    return(
        <>
         
        </>
    )
}

export default service;