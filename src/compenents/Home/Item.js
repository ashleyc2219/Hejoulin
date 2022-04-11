import React from 'react'

// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      level: this.props.level,
    }
    this.itemClick = this.itemClick.bind(this)
  }
  itemClick() {
    this.props.childClickChange(this.props.id - 1)
  }

  render() {
    let className = 'item level' + this.props.level
    let sakebig = 'min'
    let level = this.props.level
    let mark = ''

    if (level == 0) {
      sakebig = 'max'
      mark = <img className="gif" src="/Home/sake/marrk.png"></img>
    } else {
      sakebig = 'min'
    }
    return (
      <div className={className} onClick={this.itemClick}>
        {mark}

        <img src={'/Home/sake/b' + sakebig + this.props.id + '.png'}></img>
      </div>
    )
  }
}

export default Item
