import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="bg-muted px-7">
        <Header />
      </div>
    </div>
  );
}
