// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  changeCard = () => {
    this.setState({isClicked: false})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state

    console.log(emojis)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          {isClicked === true ? (
            <div className="emoji-rows">
              {emojis.map(each => (
                <li type="button" key={each.id}>
                  <div>
                    <img
                      src={each.imageUrl}
                      onClick={this.changeCard}
                      className="emoji"
                      alt={each.name}
                    />
                    <p className="name">{each.name}</p>
                  </div>
                </li>
              ))}
            </div>
          ) : (
            <div className="love-bg">
              <img
                src={loveEmojiUrl}
                className="love-emoji-image"
                alt="love emoji"
              />
              <h1 className="thank-you">thank You!</h1>
              <p className="feedback">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
