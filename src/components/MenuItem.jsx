export default function MenuItem(...props) {

  return (
    <div className="line">
      <label htmlFor="item">Item do cardápio</label>
      <input id="item" type="text" />

      <label htmlFor="price">Preço R$</label>
      <input id="price" type="number" />
      <button onClick={props.remove}>Remover</button>
    </div>
  )
}
