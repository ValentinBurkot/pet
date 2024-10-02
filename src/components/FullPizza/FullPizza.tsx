import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

export default function FullPizza() {
  const [pizza, setPizza] = useState<{
    imageUrl: string
    title: string
    price: string
  }>();

  const { id } = useParams();

  useEffect(() => {
    async function getPizza() {
      try {
        const { data } = await axios.get(
          `https://66edb19a380821644cddba54.mockapi.io/items/` + id
        );

        setPizza(data);
      } catch (error) {
        console.log(error);
      }
    }

    getPizza();
  }, [id]);

  if (!pizza) {
    return "Загрузка...";
  }
  return (
    <div>
      <img src={pizza.imageUrl} alt="IMG" />
      <h2>{pizza.title}</h2>
      <p></p>
      <p>{pizza.price}</p>
    </div>
  );
}
