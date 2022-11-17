import { useState } from "react"
import MenuItem from "./components/MenuItem"
import TitleName from "./components/TitleName"
import Button from "./components/Button"

export default function Teste() {
  const [items, setItems] = useState([<MenuItem key={0} />])

  function removeItem(e) {
    e.target.parentNode.outerHTML = null
  }

  function addItem(e) {
    e.preventDefault()
    let index = items.length
    setItems([...items, <MenuItem key={index} remove={removeItem} />])
  }

  return (
    <div className="container">
      <h1>Gerador de Cardápio</h1>
      <p>preencha os campos para gerar o seu cardápio</p>

      <div className="cardapioInfos">
        <form>
          <TitleName description="Nome do restaurante" />
          <div className="items">
            {items}
            <button onClick={addItem}>Adicionar Item</button>
          </div>
        </form>
      </div>
      <Button></Button>
    </div>
  )
}
