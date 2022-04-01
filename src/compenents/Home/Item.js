import React from 'react'

// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: this.props.level,
    }
  }

  render() {
    let className = 'item level' + this.props.level
    let sakebig = 'min'
    let level = this.props.level

    if (level == 2) {
      sakebig = 'max'
    } else {
      sakebig = 'min'
    }
    return (
      <div className={className}>
        <img src={'/Home/sake/b' + sakebig + this.props.id + '.png'}></img>
      </div>
    )
  }
}

export default Item
