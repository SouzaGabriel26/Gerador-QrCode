export default function Button(...props) {
  function handleItems(e) {
    let resName = document.querySelector('#name').value
    let itemName = document.querySelectorAll('#item')[0].value
    let itemPrice = document.querySelectorAll('#price')[0].value
    localStorage.setItem('ResName', resName)
    localStorage.setItem('name', itemName)
    localStorage.setItem('price', itemPrice)
    window.location.href = '/menu'
  }
  
  return (
    <button type="submit" onClick={handleItems}>
      Criar Menu
    </button>
  )
}
