import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="rounded-3xl border border-black bg-white p-4 shadow-sm">
      <div className="overflow-hidden rounded-[1.25rem] bg-zinc-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-cover"
        />
      </div>
      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
        {product.category} {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-black">{product.title}</h3>
      <p className="mt-2 text-base font-bold text-black">{product.price}</p>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        {product.content[0].substring(0, 120)}...
      </p>
      <Button to={`/products/${product.name}`} className="mt-4">View Product</Button>
    </article>
  );
};

export default ProductCard;
