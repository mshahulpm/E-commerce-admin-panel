// material
import { Grid, GridProps } from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

type props = {
  products: {
    id: string | number,
    name: string,
    cover: string,
    price: number,
    colors: string[],
    status: string,
    priceSale: number | null,
  }[]
};

export default function ProductList({ products, ...other }: props & GridProps) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
