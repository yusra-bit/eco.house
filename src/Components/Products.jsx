import '../styles.css';
import Data from '../products';

export default function Products() {
    return (
        <div>
        {
            Data.map ( product => {
                return(
                    <div key={product.id}>
                        <a href= {'/productdetails/' + product.id}>
                        <img src={product.img} />
                        </a> <br />
                        
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