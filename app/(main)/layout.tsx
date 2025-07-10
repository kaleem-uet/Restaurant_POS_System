import TopNav from "@/components/common/TopNav";
import BottomNav from "@/components/common/BottomNav";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <TopNav />
      {children}
      <BottomNav />
    </main>
  );
}
