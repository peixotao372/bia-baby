import { useContext, useEffect, useState } from "react";
import { Text } from 'react-native';
import { BackgroundContext } from "../context/BackgroundProvider";
import { home } from "../styles/colors";
import CatalogView from "../components/CatalogView";
import {
  ButtonAddToCart,
  ButtonBuy,
  ProductDescription,
  ProductPrice,
  ProductTitle,
  ProductCardView,
  ProductImage,
  ButtonTextBuy,
  ButtonTextCart
} from "./style";

import { screens, useNavigation } from "../context/NavigationContext";


export default function Product() {

  const { setScreen, props, setProps } = useNavigation();
  const [selectedProduct] = useState(props.product);
  console.log(selectedProduct)


  function callCartScreen() {
    setScreen(screens.cart);
  }

  return (

    <CatalogView footer searchBar backButton barColor="#63C683" footerColor="#63C683">
      {/* <Text
        main
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          marginTop: 85,
          marginLeft: 15,
          color: '#808080'
        }}
      >
        Enviar para CIDADE - CEP
      </Text> */}
      <ProductCardView>
        <ProductImage source={selectedProduct.image} />
        <ProductTitle>{selectedProduct.name}</ProductTitle>
        <ProductPrice>R$ {selectedProduct.price.toFixed(2).replace('.', ',')}</ProductPrice>
        <ButtonAddToCart>
          <ButtonTextCart>Adicionar ao Carrinho</ButtonTextCart>
        </ButtonAddToCart>
        <ButtonBuy onPress={() => callCartScreen()}>
          <ButtonTextBuy>Comprar Agora</ButtonTextBuy>
        </ButtonBuy>
        <ProductDescription style={{ fontWeight: "bold" }}>
          Descrição do produto:
        </ProductDescription>
        <ProductDescription>
          {selectedProduct.description || "Sem descrição disponível"}
        </ProductDescription>
      </ProductCardView>
    </CatalogView>
  );
}