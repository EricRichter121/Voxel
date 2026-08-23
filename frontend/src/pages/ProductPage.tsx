import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams(); 

  return (
    <div>
      <h1>Страница продукта</h1>
      <p>ID текущего продукта: {id}</p>
    </div>
  );
}

export default ProductPage