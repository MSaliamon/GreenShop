import './Section1.scss'
import FlowerPotMini from '../../../assets/homepage/png/FlowerpotMini.png'
import FlowerPot from '../../../assets/homepage/png/Flowerpot.png'
function Section1() {
  return (
    <section className="section1">
        <div className="section1-container1">
            <div className="section1-textbox">
                <p className="section1-textbox__sub-title">Welcome to GreenShop</p>
                <h2 className="section1-textbox__title">Let’s Make a Better <span className="section1-textbox__title--color">Planet</span></h2>
                <p className="section1-textbox__text">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
            </div>
            <button className="section1-container1__btn button">SHOP NOW</button>
        </div>
        <div className="section1-container2">
            <img src={FlowerPotMini} alt="FlowerPotMini" className="section1-container2__img" />
            <img src={FlowerPot} alt="FlowerPot" className="section1-container2__img" />
        </div>
    </section>
  )
}

export default Section1