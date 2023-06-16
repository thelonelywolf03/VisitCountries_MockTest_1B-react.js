import './index.css'

const CountriesList = props => {
  const {item, changeVisit} = props
  const {id, name, isVisited} = item

  const visitClicked = () => {
    changeVisit(id)
  }
  return (
    <li className="country-item">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button type="button" className="visit" onClick={visitClicked}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
