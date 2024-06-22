import "./salePromotion.css"
import "../components/hero.css"
import { Link } from "react-router-dom"
const SalePromotion = () => {
  return (
    <div className="salePromotion container">
      <h3>Season Sale</h3>
      <h1>Save now on select items Hurry up,<br />  dont miss your chance</h1>

      <button className="btn shop-btn">
        <Link to='/Collections/all/deals'  className="shopLink">Shop Now</Link>
      </button>
    </div>
  )
}

export default SalePromotion