import './Fline.css'

const Fline = ({icon,title}) => {
  return (
    <div className="fLine">
    <span>{icon}</span>
    <span>{title}</span>
  </div>
  )
}

export default Fline