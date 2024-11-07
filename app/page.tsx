import Image from "next/image";
import { logout } from "./logout/actions";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-[#7fabff] to-[#6991ff]">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start text-white">
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-4xl font-bold mb-2">Welcome !!</h1>
          <p className="text-lg">We're excited to have you back on our platform.</p>
        </div>
        
        <form action={logout} >
          <button
            type="submit"
            className="bg-white text-[#6991ff] px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors "
          >
            Logout
          </button>
        </form>
      </main>
    </div>
  );
}