import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="main-container">
      <div className="container">
        <h1 className="heading">FAQs</h1>
        <ul>
          {faqsList.map(eachItem => (
            <FaqItem faqDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
