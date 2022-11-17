export default function TitleName(props) {
  return (
    <div className="line">
      <label htmlFor="name">{props.description}</label>
      <input id="name" type="text" required/>
    </div>
  )
}
