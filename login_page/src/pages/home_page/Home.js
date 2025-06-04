// src/components/CartaoListaVirtual.jsx
import { FixedSizeGrid } from "react-window";
import styles from './home.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Home() {

  const cartoes = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    nome: `Cartão ${i + 1}`,
    img: "https://th.bing.com/th/id/OIP.GELKQ4d2ogvLPHMtaI4UygHaHa?rs=1&pid=ImgDetMain",
  }));

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * 5 + columnIndex;
    if (index >= cartoes.length) return null;
    const cartao = cartoes[index];

    return (
      <div style={{ ...style}}>
          <div className={styles.Card}>
            <img src={cartao.img} alt="image-cartao"></img>
            <h1>{cartao.nome}</h1>
            <h4>{cartao.id}</h4>
            <div>
              <button className={styles.BinButton}>
                <FontAwesomeIcon icon={faTrashCan}/>
              </button>
              <button className={styles.PencilButton}>
                <FontAwesomeIcon icon={faPencil}/>
              </button>
            </div>
          </div>
      </div>
    );
  };

  return <>
    <FixedSizeGrid
      columnCount={5}
      columnWidth={250}
      rowCount={ Math.ceil(cartoes.length / 5)}
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