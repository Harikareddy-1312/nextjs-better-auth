import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: new Headers(await headers()),
  });

  if (!session) redirect("/auth/login");

  const email = session.user?.email ?? "User";

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {email}</p>
    </div>
  );
}
