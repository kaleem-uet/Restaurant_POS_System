import Greetings from "@/components/Greetings";
import MiniCard from "@/components/MiniCard";
import PopularDishes from "@/components/PopularDishes";
import RecentOrders from "@/components/RecentOrders";
export default function Home() {
  return (
    <section className="bg-[#1f1f1f] min-h-screen px-4 py-6">
      <div className="grid grid-cols-12 gap-4">
        {/* Left - 8 columns */}
        <div className="col-span-12 md:col-span-8">
          <Greetings />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <MiniCard
              title="Total Earnings"
              icon={<span>📈</span>}
              number={500}
              footerNum={5}
            />
            <MiniCard
              title="In Progress"
              icon={<span>👥</span>}
              number={200}
              footerNum={2}
            />
          </div>

          <RecentOrders />
        </div>

        {/* Right - 4 columns */}
        <div className="col-span-12 md:col-span-4 mb-4">
          <PopularDishes />
        </div>
      </div>
    </section>
  );
}
