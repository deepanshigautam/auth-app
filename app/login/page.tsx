import { login, signup } from '@/app/login/actions';

export default function LoginPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-[#7fabff] to-[#6991ff]">
      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start text-white">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-4xl font-bold mb-8 text-[#6991ff] text-center ">Login/Signup</h2>
          <form className="space-y-10 px-[1rem]">
            <div>
              <label htmlFor="email" className="block text-[1.1rem] font-medium mb-2 text-gray-700">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-8 py-3 border-b border-[#6991ff] focus:outline-none focus:border-[#6991ff] bg-white rounded-full"
                  placeholder="Enter your email"
                />
                
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-[1.1rem] font-medium mb-2 text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 border-b border-[#6991ff] focus:outline-none focus:border-[#6991ff] bg-white text-black rounded-full"
                  placeholder="Enter your password"
                />
                
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                formAction={login}
                className="bg-[#6991ff] text-white px-8 py-3 rounded-full font-bold hover:bg-[#5d82e6] transition-colors"
              >
                Log in
              </button>
              <button
                type="submit"
                formAction={signup}
                className="bg-[#6991ff] text-white px-8 py-3 rounded-full font-bold hover:bg-[#5d82e6] transition-colors"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}