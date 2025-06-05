// src/components/CartaoListaVirtual.jsx
import { FixedSizeGrid } from "react-window";
import styles from './home.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Home() {
  const [cartoes, setCartoes] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      nome: `Cartão ${i + 1}`,
      img: "https://th.bing.com/th/id/OIP.GELKQ4d2ogvLPHMtaI4UygHaHa?rs=1&pid=ImgDetMain",
    }))
  );

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 5 + columnIndex;

    if (index - 1 >= cartoes.length) {
      return null
    }
    else if (index >= cartoes.length) {
      return (
        <div style={{ ...style }}>
          <div className={`${styles.Card} ${styles.AddCard}`} onClick={
            () => {
              const novoCartao = {
                id: cartoes.length + 1,
                nome: `Cartão ${cartoes.length + 1}`,
                img: "https://th.bing.com/th/id/OIP.GELKQ4d2ogvLPHMtaI4UygHaHa?rs=1&pid=ImgDetMain",
              };
              setCartoes([...cartoes, novoCartao]);
            }
          }>
            <h1 style={{ fontSize: "5vw" }}>+</h1>
          </div>
        </div>
      );
    } else {
      const cartao = cartoes[index];
      return (
        <div style={{ ...style }}>
          <div className={styles.Card}>
            <img src={cartao.img} alt="image-cartao"></img>
            <h1>{cartao.nome}</h1>
            <h4>{cartao.id}</h4>
            <div>
              <button className={styles.BinButton} onClick={() => {
                setCartoes(
                  [
                    ...cartoes.slice(0, index),
                    ...cartoes.slice(index + 1)
                  ]
                );
              }}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
              <button className={styles.PencilButton}>
                <FontAwesomeIcon icon={faPencil} />
              </button>
            </div>
          </div>
        </div>
      );
    };
  }

  return <>
    <FixedSizeGrid
      columnCount={5}
      columnWidth={250}
      rowCount={Math.ceil((cartoes.length + 1) / 5)}
      rowHeight={300}
      height={1000}
      width={5 * 250}
      className={styles.Grind}
    >
      {Cell}
    </FixedSizeGrid>
  </>
}

export default Home;