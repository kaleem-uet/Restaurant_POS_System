import BottomNav from "@/components/common/BottomNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <BottomNav />
    </>
  );
}
