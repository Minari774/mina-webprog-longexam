import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';

// import shoe images
import shoe1 from '../../assets/img/shoe1.png';
import shoe2 from '../../assets/img/shoe2.png';
import shoe3 from '../../assets/img/shoe3.png';
import shoe4 from '../../assets/img/shoe4.png';

const AboutPage = () => {
  const shoes = [shoe1, shoe2, shoe3, shoe4];

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y border-black bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-black bg-zinc-100 p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] bg-black">
              <img
                src={logo}
                alt="SHOEKING"
                className="h-32 w-32 rounded-full border-2 border-white bg-white object-contain"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About SHOEKING
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-black sm:text-4xl">
              A modern sneaker destination built for fast shopping and fresh silhouettes.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              SHOEKING brings clean design and bold footwear categories together in a streamlined, Nike-inspired experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Brand Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-black">Fast, functional, minimal</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-black bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-black">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Items
            </p>
          </div>
          <div className="rounded-3xl border border-black bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-black">06</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Categories
            </p>
          </div>
          <div className="rounded-3xl border border-black bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-black">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Pickup Slots
            </p>
          </div>
          <div className="rounded-3xl border border-black bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold text-black">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Orders
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Store Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-black">Clean product flow</h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border border-black bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-black">Curated Catalog</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Products are grouped with clear visuals and direct action buttons.
                </p>
              </article>

              <article className="rounded-3xl border border-black bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-black">Simple Checkout</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Pricing, stock, and checkout actions are laid out for fast decisions.
                </p>
              </article>

              <article className="rounded-3xl border border-black bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-black">Pickup Ready</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Order details are easy to scan whether you shop online or in-store.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border border-black bg-white p-5 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Category Grid
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {shoes.map((shoe, index) => (
                <div
                  key={index}
                  className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-100 p-4"
                >
                  <img
                    src={shoe}
                    alt={`Shoe ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>

            <Button to="/products" className="mt-5">
              View Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;