import BottomNav from "@/app/components/common/BottomNav";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <BottomNav />
    </div>
  );
}
