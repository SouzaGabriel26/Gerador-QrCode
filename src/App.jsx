import { useState } from "react"
import QRCode from "react-qr-code"
import QRCodeLink from "qrcode"
import "./App.css"

function App() {
  const [link, setLink] = useState("")
  const [qrcodeLink, setQrcodeLink] = useState("")

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (err, url) {
        setQrcodeLink(url)
      }
    )
  }


  addEventListener('DOMContentLoaded', () => {
    setLink(window.location.href)
    handleGenerate(window.location.href)
  })

  return (
    <div className="container">
      <QRCode value={link} />

      <a href={qrcodeLink} download={`qrcode.png`}>
        Clique para Baixar QrCode
      </a>
    </div>
  )
}

export default App
