import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { DashboardShell } from "@/components/common/dashboard/shell";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (!data.user) redirect("/auth/login");

    return (
        <DashboardShell userEmail={data.user.email ?? ""}>{children}</DashboardShell>
    );
}