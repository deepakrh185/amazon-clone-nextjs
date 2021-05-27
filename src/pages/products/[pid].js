function Id() {
  return (
    <div>
      <h1>{pId.description}</h1>
    </div>
  );
}

export default Id;

export async function getStaticProps(context) {
  const { params } = context;
  const productId = context.pid;
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  const pId = products.find((product) => product.id === productId);
  return {
    props: { pId },
  };
}
