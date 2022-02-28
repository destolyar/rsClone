import '../styles/components/starter-page.scss'
import { Link } from 'react-router-dom'

export const StarterPage: React.FunctionComponent = () => {
  return(
    <div className="starter-page">
      <Link className='starter-page__button-trips' to={'/trips'}>Поездки</Link>
      <Link className='starter-page__button-resorts' to={'/resorts'}>Курорты</Link>
    </div>
  )
}