
import type { NextRequest } from "next/server";


export default async function hello(req: NextRequest) {
  return new Response(JSON.stringify({ name: "John Doe" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

