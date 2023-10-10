import '../styles.css';
import Data from '../products.json';

export default function Products() {
    return (
        <div>
        {
            Data.map ( product => {
                return(
                    <div key={product.id}>
                    <strong>{product.item_name}</strong>
                    <br />
                    {product.price}
                    <br />
                    {product.tags}
                    <br />
                    <br />
                    </div>
                )
            })
        }
        </div>
    );
}