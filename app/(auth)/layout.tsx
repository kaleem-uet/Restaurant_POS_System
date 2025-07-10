import Image from "next/image";
import AuthBottom from "../../components/common/AuthBottom";
import AuthTop from "../../components/common/AuthTop";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left Section - Image */}
      <div className="relative w-full md:w-1/2 h-80 md:h-auto">
        <Image
          src="/assets/restaurant-img.jpg"
          alt="Restaurant Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-400/50 mix-blend-multiply z-10" />
        <blockquote className="absolute bottom-4 md:bottom-10 z-20 px-6 md:px-8 text-lg md:text-2xl italic text-white">
          "Serve customers the best food with prompt and friendly service in a
          welcoming atmosphere, and they’ll keep coming back."
          <br />
          <span className="block mt-2 md:mt-4 text-yellow-400">
            - Founder of Restro
          </span>
        </blockquote>
      </div>

      {/* Right Section - Form */}
      <div className="w-full md:w-1/2 min-h-screen bg-[#1a1a1a] p-10 md:p-10 flex flex-col justify-center">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={56}
            height={56}
            className="border-2 rounded-full p-1"
          />
          <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">
            POS
          </h1>
        </div>

        <AuthTop />

        {children}
        <AuthBottom />
      </div>
    </div>
  );
}
