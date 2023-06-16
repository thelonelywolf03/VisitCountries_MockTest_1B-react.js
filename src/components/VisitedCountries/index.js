import './index.css'

const VisitedCountries = props => {
  const {item, removeVisited} = props
  const {imageUrl, name, id} = item
  const removeClicked = () => {
    removeVisited(id)
  }
  return (
    <li className="item">
      <div className="cont">
        <img src={imageUrl} alt="thumbnail" className="thumbnail" />
        <div className="bot-cont">
          <p className="name">{name}</p>
          <button type="button" className="but" onClick={removeClicked}>
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
