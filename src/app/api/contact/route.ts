import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

// TODO: wire to real email (e.g. Resend) or store via Prisma
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  console.log("Contact form submission:", parsed.data);

  return NextResponse.json({ ok: true });
}
