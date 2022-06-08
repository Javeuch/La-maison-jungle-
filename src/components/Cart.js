import '../styles/Cart.css'
function Cart() {
    const prix_monsteria = 8;
    const prix_lierre = 10;
    const prix_bouquet = 15;
    return (
        <div className="lmj-cart">

            <h4> Panier </h4>

            <ul>
                <li>monstera coûte  {prix_monsteria} €</li>
                <li>lierre coûte {prix_lierre} €</li>
                <li>bouquet de fleurs coûte {prix_bouquet} €</li>
            </ul>

            <h5>Total du panier = {prix_monsteria + prix_lierre + prix_bouquet} €</h5>
        </div>
    )
}
export default Cart;