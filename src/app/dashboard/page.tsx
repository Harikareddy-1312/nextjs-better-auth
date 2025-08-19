import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: new Headers(await headers()),
  });

  if (!session) redirect("/login");
  return <div>Welcome, {session.user?.email ?? "User"}</div>;
}
