import { AppointmentRequest } from "@/components/appointment-request";
import { Header } from "@/components/header";
import { RecentPatients } from "@/components/recent-pacients";
import { Sidebar } from "@/components/sidebar";
import { Sumary } from "@/components/sumary";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="bg-muted px-7 flex flex-col gap-7">
        <Header />

        <main className="flex flex-col gap-7">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl text-text-primary font-bold">Welcome, Dr. Thiago</h1>
            <span className="text-sm text-text-secondary">Have a nice day at great work</span>
          </div>

          <Sumary />

          <AppointmentRequest />

          <RecentPatients />
        </main>
      </div>
    </div>
  );
}
