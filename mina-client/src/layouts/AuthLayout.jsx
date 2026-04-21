import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-white text-black">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b-2 border-zinc-200 bg-zinc-50 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-zinc-200 lg:p-16">
          <div className="flex w-full max-w-md items-center justify-center rounded-4xl border border-black/10 bg-white p-8 sm:p-10 shadow-xl shadow-zinc-200/20">
            <div className="relative aspect-square w-full max-w-[18rem] overflow-hidden rounded-4xl border border-black/10 bg-zinc-50">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/77f5e642940979.57dd87848d63e.png"
                alt="Sneaker photo for authentication"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-white/90 p-4 text-center text-sm font-semibold text-black shadow-lg shadow-black/10">
                Welcome to SHOEKING
              </div>
            </div>
          </div>
        </div>

        <main className="flex items-center bg-white px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md rounded-4xl border border-zinc-200 bg-white p-10 shadow-xl shadow-zinc-200/20">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
