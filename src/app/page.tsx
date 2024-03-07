import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr]">
      <Sidebar />
      <div className="bg-muted">Main content</div>
    </div>
  );
}
