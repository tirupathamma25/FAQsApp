import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isShowAnswer: false,
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    return (
      <div>
        <hr />
        <p className="answer-text">{answerText}</p>
      </div>
    )
  }

  onClickFaqItem = () => {
    this.setState(prevState => ({isShowAnswer: !prevState.isShowAnswer}))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    const {isShowAnswer} = this.state

    return (
      <li className="list-item">
        <div className="question-card">
          <h1 className="question-text">{questionText}</h1>
          {isShowAnswer ? (
            <button
              type="button"
              className="button"
              onClick={this.onClickFaqItem}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            </button>
          ) : (
            <button
              type="button"
              className="button"
              onClick={this.onClickFaqItem}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            </button>
          )}
        </div>
        {isShowAnswer ? this.renderAnswer() : ''}
      </li>
    )
  }
}

export default FaqItem
