import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';

const products = [
  {id:1, name:'Shoes', description:'Running shoes.', price:'$5', image:'https://nb.scene7.com/is/image/NB/m1080s11_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600'},
  {id:2, name:'Macbook', description:'Apple Macbook.', price:'$10', image:'https://www.apple.com/newsroom/images/product/os/macos/standard/Apple_macOS-catalina-available-today_100719_big.jpg.large.jpg'},
]
const Products = () => {
return(
 <main>
   <Grid container justify='center' spacing={4}>
     {products.map((product) => (
       <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
         <Product product={product} />
       </Grid>
     ))}
   </Grid>
  </main>
  )

}

export default Products;