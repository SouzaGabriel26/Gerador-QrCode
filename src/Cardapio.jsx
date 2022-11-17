import { useState } from "react"
import QRCode from "react-qr-code"
import QRCodeLink from "qrcode"
import { useEffect } from "react";

export default function Cardapio() {
  const [link, setLink] = useState("");
  // const [qrcodeLink, setQrcodeLink] = useState("")

  const title = localStorage.getItem('ResName')
  const itemName = localStorage.getItem('name')
  const itemPrice = localStorage.getItem('price')


  const url = window.location.href

  useEffect(() => {
    setLink(url)
  })

  

  return(
    <div>
      <h1>{title}</h1>
      <div>
        <h3>{itemName}</h3>
        <span>{itemPrice}</span>
        <p>{url}</p>
      </div>

      <div className="container">
          <QRCode value={link} />

      </div>
    </div>
  )
}