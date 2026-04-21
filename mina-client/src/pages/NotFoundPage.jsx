import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y border-black bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Page not found
          </p>
          <h1 className="text-6xl font-bold leading-tight text-black sm:text-7xl">
            404
          </h1>
          <p className="mt-4 text-lg leading-7 text-zinc-600">
            This page isn't available. Navigate back to the shop or explore our latest silhouettes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/">Back Home</Button>
            <Button to="/products">View Products</Button>
            <Button to="/auth/signin" variant="primary">Sign In</Button>
            <Button to="/auth/signup">Sign Up</Button>
          </div>
        </div>
      </section>

      <section className="border-y border-black bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-black">Find what you need</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-black bg-black px-6 py-6 text-white shadow-sm">
              <h3 className="font-semibold text-white">Home</h3>
              <p className="mt-1 text-sm text-zinc-300">Return to the homepage and browse our featured footwear.</p>
              <Button to="/" className="mt-4 bg-white text-black hover:bg-zinc-100">Go Home</Button>
            </div>

            <div className="rounded-3xl border border-black bg-white px-6 py-6 shadow-sm">
              <h3 className="font-semibold text-black">Shop Shoes</h3>
              <p className="mt-1 text-sm text-zinc-600">Browse our curated shoe collection and latest arrivals.</p>
              <Button to="/products" className="mt-4">View Products</Button>
            </div>

            <div className="rounded-3xl border border-black bg-white px-6 py-6 shadow-sm">
              <h3 className="font-semibold text-black">Sign In</h3>
              <p className="mt-1 text-sm text-zinc-600">Access your account to track orders or save favorites.</p>
              <Button to="/auth/signin" className="mt-4">Sign In</Button>
            </div>

            <div className="rounded-3xl border border-black bg-white px-6 py-6 shadow-sm">
              <h3 className="font-semibold text-black">Sign Up</h3>
              <p className="mt-1 text-sm text-zinc-600">Create an account for faster checkout and saved preferences.</p>
              <Button to="/auth/signup" className="mt-4">Sign Up</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
