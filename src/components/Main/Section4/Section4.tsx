import './Section4.scss'
import blog from '../../../data/Blog'
function Section4() {
  return (
    <section className="section4">
      <div className="section4-textbox">
        <h2 className="section4-textbox__title">Our Blog Posts</h2>
        <p className="section4-textbox__text">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
      </div>
      <div className="section4-container">
        {
          blog.map((item) => (
            <div className="section4-card" key={item.id}>
              <img src={item.img} alt={item.img} className="section4-card__img" />
              <p className="section4-card__sub-title">{item.subTitle}</p>
              <h3 className="section4-card__title">{item.title}</h3>
              <p className="section4-card__text">{item.text}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Section4