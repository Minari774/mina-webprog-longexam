import Button from '../../components/Button';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-black bg-black px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src="https://w0.peakpx.com/wallpaper/976/932/HD-wallpaper-nike-shoe-in-background-of-banner-nike.jpg"
                    alt="SHOEKING hero"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/55" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
                            SHOEKING Collection
                        </p>
                        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                            Modern sneakers, sharp silhouettes.
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
                            Discover signature sneakers built for performance, style, and everyday motion.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products">
                                Shop Shoes
                            </Button>
                            <Button to="/about" variant="primary">
                                Explore Brand
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-black bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Signature Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-black">Designed for motion</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border border-black bg-white p-5 shadow-sm">
                        <p className="text-2xl font-bold text-black">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Sneakers
                        </p>
                    </div>
                    <div className="rounded-3xl border border-black bg-white p-5 shadow-sm">
                        <p className="text-2xl font-bold text-black">06</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Collections
                        </p>
                    </div>
                    <div className="rounded-3xl border border-black bg-white p-5 shadow-sm">
                        <p className="text-2xl font-bold text-black">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Drops
                        </p>
                    </div>
                    <div className="rounded-3xl border border-black bg-white p-5 shadow-sm">
                        <p className="text-2xl font-bold text-black">03</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Categories
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y border-black bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Featured Styles
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-black">Elevated sneaker categories</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-3xl border border-black bg-white p-6 shadow-sm">
                        <div className="overflow-hidden rounded-[1.25rem] bg-zinc-100">
                            <img
                                src="https://pyxis.nymag.com/v1/imgs/a79/296/3731bcf57b5c9cdb8593c277c72e21ea7d-16-nike-shoes-lede.2x.rsocial.w600.jpg"
                                alt="Everyday sneaker"
                                className="h-56 w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-black">Everyday Sneakers</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Daily wear styles built for comfort and clean streetwear looks.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">View Shoes</Button>
                    </article>

                    <article className="rounded-3xl border border-black bg-white p-6 shadow-sm">
                        <div className="overflow-hidden rounded-[1.25rem] bg-zinc-100">
                            <img
                                src="https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_391,w_3200,h_1800/c_fill,w_1440,ar_1440:810,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/kicks/01jd5ppx0333sx8xm8r3.jpg"
                                alt="Performance sneaker"
                                className="h-56 w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-black">Performance Footwear</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            High-performance trainers made to support fast-paced movement.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">Shop Shoes</Button>
                    </article>

                    <article className="rounded-3xl border border-black bg-white p-6 shadow-sm">
                        <div className="overflow-hidden rounded-[1.25rem] bg-zinc-100">
                            <img
                                src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iFenljPhIG64/v1/-1x-1.webp"
                                alt="Seasonal sneaker"
                                className="h-56 w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-black">Seasonal Styles</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Curated seasonal silhouettes for bold everyday wear.
                        </p>
                        <Button to="/products" className="mt-4" variant="primary">
                            View Shoes
                        </Button>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
