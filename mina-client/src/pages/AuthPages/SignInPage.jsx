import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-zinc-500 focus:border-black focus:bg-zinc-100';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Log In</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Access your store account to review orders, saved items, and pickup details.
      </p>

      <nav aria-label="Authentication pages" className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/auth/signin"
          aria-current="page"
          className="rounded-full border-2 border-black bg-black px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
        >
          Sign In
        </Link>
        <Link
          to="/auth/signup"
          className="rounded-full border-2 border-black bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-black hover:bg-zinc-100"
        >
          Sign Up
        </Link>
      </nav>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-black">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-black">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Use at least 8 characters with letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-black">
            <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 accent-black" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-black transition hover:text-zinc-600">
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Log In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log In with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-black transition hover:text-zinc-600">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
