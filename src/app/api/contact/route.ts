// app/api/contact/route.ts
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  console.log("Получены данные формы:", { name, email, message })

  return NextResponse.json({
    message: `Thank you for your interest, ${name}`
  })
}
