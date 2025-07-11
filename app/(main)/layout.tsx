import TopNav from "@/components/common/TopNav";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <TopNav />
      {children}
    </main>
  );
}
