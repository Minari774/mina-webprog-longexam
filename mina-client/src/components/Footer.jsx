import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-black bg-white px-4 py-10 sm:px-6 lg:px-8 text-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <p className="text-lg font-bold tracking-[0.04em] uppercase">SHOEKING</p>
          <p className="max-w-md text-sm text-zinc-600">
            A refined footwear destination with clean navigation and modern black-and-white styling.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Shop
            </p>
            <Link to="/products" className="block text-sm text-black hover:text-zinc-700">
              All Shoes
            </Link>
            <Link to="/" className="block text-sm text-black hover:text-zinc-700">
              Home
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Account
            </p>
            <Link to="/auth/signin" className="block text-sm text-black hover:text-zinc-700">
              Sign In
            </Link>
            <Link to="/auth/signup" className="block text-sm text-black hover:text-zinc-700">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex sm:items-center sm:justify-between">
        <p>© 2026 SHOEKING. All rights reserved.</p>
        <p className="mt-3 sm:mt-0">Focused on silhouette, speed, and effortless shopping.</p>
      </div>
    </footer>
  )
}

export default Footer
