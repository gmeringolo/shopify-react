import React, {useEffect, useContext} from 'react'
import BombYellow from "../img/Bath_bomb_yellow.png"
import { useParams, Link } from 'react-router-dom'
import { Box, Grid, Text, Image, Button, Heading, Flex, Center } from "@chakra-ui/react";
import { ShopContext } from '../context/shopContext'

const ProductPage = () => {

  const { handle }  = useParams();

  const {fetchProductWithHandle, addItemToCheckout, product} = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle)
  }, [fetchProductWithHandle, handle])

  /*if (!product.title) return <div>Loadings...</div>;*/

  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)">
        <Image src={BombYellow}/>
        <Box>
          <Heading>The Yellow Mello </Heading>
          <Text>49.00</Text>
          <Text>Bath bombs are fun, colourful balls of dry ingredients that dissolve and release essential oils when placed in water. They’re a luxurious treat that comes in many shapes, sizes, colors and scents. They appeal to both kids and adults and have exploded in popularity in recent years. Bath bomb manufacturer Lush reported that they manufactured 13.5 million bath bombs in 2014 and were on track to produce even more in 2015. If you consider the fact that they’re just one company, and that the products retails for $4 to 10 USD each, that’s a huge industry!</Text>
          <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add to Cart</Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default ProductPage