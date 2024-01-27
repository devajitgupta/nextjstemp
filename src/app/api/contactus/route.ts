import { NextRequest, NextResponse } from "next/server";
// import { client } from "../../../common/utils/sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "../client.sanity";

interface FormsFormInput {
   firstName: string;
   lastName: string;
   email: string;
   phone: string;
   alternatePhone: string;
   question: string[];
   message: string;
}

export async function GET(request: NextRequest) {
   // const restaurants = await prisma.restaurant.findMany({
   //    skip: skip ? parseInt(skip, 10) : undefined,
   //    take: take ? parseInt(take, 10) : undefined,
   // });  // const skip = request.nextUrl.searchParams.get("skip");
   // const take = request.nextUrl.searchParams.get("take");

   return NextResponse.json({ status: "Active", data: "Hello" });
}

export async function POST(request: Request) {
   if (request.method === "POST") {
      try {
         const json: FormsFormInput = await request.json();

         // Use Sanity client to create the document
         const created = await client.create({
            _type: "contactus",
            ...json,
         });
         return new NextResponse();
      } catch (error) {
         return new NextResponse("Internal Server Error", { status: 500 });
      }
   } else {
      return new NextResponse("Method Not Allowed", { status: 405 });
   }
}
