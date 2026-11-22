// import {carSchema} from "@/lib/schema";
// import {NextResponse} from "next/server";
// import {z} from "zod";
//
// export async function POST(req:Request){
//     const body=await req.json();
//     const result=carSchema.safeParse(body);
//     if(!result.success){
//         return NextResponse.json({errors:z.flattenError(result.error)},{status:400})
//     }return NextResponse.json({message:'OK',data:result.data})
// }   для клієнта
