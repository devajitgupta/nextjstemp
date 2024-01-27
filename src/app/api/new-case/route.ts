// import { client } from "@/common/utils/sanity";
// import { createClient } from "next-sanity";
// import config from "@/common/utils/config";
import { NextRequest, NextResponse } from "next/server";
import { client } from "../client.sanity";

// const client = createClient({
//    projectId: config.projectId,
//    dataset: config.dataset,
//    apiVersion: config.apiVersion,
//    useCdn: true,
//    token: config.token,
// });

export async function GET(request: NextRequest) {
   return NextResponse.json({ status: "Active", data: "New Case" });
}

interface FormsFormInput {
   firstName: string;
   lastName: string;
   email: string;
   phone: string;
   investigationType: [];
   date: any;
   budget: string;
   message: string;
}
export async function POST(request: Request) {
   console.log("Route hit!"); // Add this line to log a message
   if (request.method === "POST") {
      try {
         const json: FormsFormInput = await request.json();

         // Use Sanity client to create the document
         const created = await client.create({
            _type: "newCase",
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
