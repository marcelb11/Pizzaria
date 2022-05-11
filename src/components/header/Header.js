import { FiAlignLeft } from 'react-icons/fi'
import { ReactComponent as PizzaLogo } from '../../assets/pizza-logo.svg'
import { FaCaretDown } from 'react-icons/fa'
import './header.scss'
export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-div">
          <FiAlignLeft size={35} />
          <PizzaLogo className="logo-svg" />
          <h3>
            Felli<i>zzaria</i>
          </h3>
        </div>
        <div className="delivery-button">
          <h4>Delivery</h4>
          <FaCaretDown />
        </div>
      </div>
    </header>
  )
}
