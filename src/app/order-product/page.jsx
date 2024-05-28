"use client"
import { useRouter } from "next/navigation";


export default function OrderProduct(){
    const router = useRouter();

    const handleClick=()=>{
            console.log("Placing your Order");
            router.push('/');
    };
    return(
        <>
            <h1>Order Product</h1>
        <button style={{marginLeft:'30px',width:'100px',height:'60px'}} onClick={handleClick}>Place</button>
    
        </>
    )
}