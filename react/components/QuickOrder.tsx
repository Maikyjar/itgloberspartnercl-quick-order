import React, { useState, useEffect } from "react";
import { useLazyQuery, useMutation } from "react-apollo";
import UPDATE_CART from "../graphql/updateCart.graphql"
import GET_PRODUCT from "../graphql/getProductBySKU.graphql"
import { generateBlockClass } from '@vtex/css-handles';
import styles from './styles.css'

const QuickOrder = ({blockClass}: {blockClass: string}) => {
  const button = generateBlockClass(styles.button, blockClass);
  const input__div = generateBlockClass(styles.input__div, blockClass);
  const title = generateBlockClass(styles.title, blockClass);
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("");
  const [getProductData, {data: product}] = useLazyQuery(GET_PRODUCT)
  const [addToCart] = useMutation(UPDATE_CART)

  const handleChange = (event: any) => {
    setInputText(event.target.value);
  };
  useEffect(() => {
    if(product) {
      let skuId = parseInt(inputText)
      addToCart({
        variables: {
          salesChannel: "1",
          items: [
            {
              id: skuId,
              quantity: 1,
              seller: "1"
            }
          ]
        }
      })
      .then(() => {
        window.location.href = "/checkout/#/cart"
      })
    }
    console.log("mi search", search);

  }, [product, search])

  const addProductToCart = () => {
    getProductData({
      variables: {
        sku: inputText
      }
    })
  };
  const searchProduct = (event: any) => {
    event.preventDefault();
    if(!inputText) {
      alert("No se ha ingresado ningun SKU")
    } else {
      setSearch(inputText);
      addProductToCart();
    }
  };
  return (
    <div>
      <h2 className={title}>Compra rápida de Easy</h2>
      <form onSubmit={searchProduct}>
        <div className={input__div}>
          <label htmlFor="sku">Ingresa el numero de SKU</label>
          {" "}
          <input id="sku" type="text" onChange={handleChange}></input>
        </div>
        <input type="submit" value="Añadir al carrito" className={button}/>
      </form>
    </div>
  )
}

export default QuickOrder
