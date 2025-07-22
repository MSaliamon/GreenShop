import './Section3.scss'
import summer1 from '../../../assets/homepage/png/summer1.png'
import summer2 from '../../../assets/homepage/png/summer2.png'
function Section3() {
  return (
    <section className="section3">
        <div className="section3-container">
            <img src={summer1} alt="summer1" className="section3-container__img" />
            <div className="section3-container__box">
                <p className="section3-container__box-text1">Summer cactus & succulents</p>
                <p className="section3-container__box-text2">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                <button className="section3-container__box-button button">Find more</button>
            </div>
        </div>
        <div className="section3-container">
            <img src={summer2} alt="summer2" className="section3-container__img" />
            <div className="section3-container__box">
                <p className="section3-container__box-text1">Summer cactus & succulents</p>
                <p className="section3-container__box-text2">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                <button className="section3-container__box-button button">Find more</button>
            </div>
        </div>
    </section>
  )
}

export default Section3