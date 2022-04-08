import React from 'react'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { CSSTransitionGroup } from 'react-transition-group'
import Item from './Item'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: '',
      interval: 0
    }
    this.rightClick = this.moveRight.bind(this)
    this.leftClick = this.moveLeft.bind(this)
    this.childClickChange = this.childClickChange.bind(this)


    this.start = this.start.bind(this)
    this.pause = this.pause.bind(this)
  }

  componentDidMount() {
    this.timeId = setInterval(this.rightClick, 2000)
    this.setState({interval: this.timeId})
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  start() {
    this.timeId = setInterval(this.rightClick, 2000)
    this.setState({interval: this.timeId})
  }

  pause() {
    clearInterval(this.state.interval)
  }

  generateItems() {
    const items = []
    let level
    // console.log('generateItems')
    // console.log(this.state.active)
    // console.log(this.state.items)
    for (let i = this.state.active - 4; i < this.state.active + 4; i++) {
      let index = i
      if (i < 0) {
        index = this.state.items.length + i
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length
      }
      level = this.state.active - i
      // console.log('index')
      // console.log(index)

      items.push(
        <Item
          key={index}
          id={this.state.items[index]}
          level={level}
          childClickChange={this.childClickChange}
        />
      )
    }
    return items
  }

  moveLeft() {
    let newActive = this.state.active
    newActive--
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: 'left',
    })
  }
  //要加this
  moveRight() {
    let newActive = this.state.active
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: 'right',
    })
  }

  childClickChange(activeItem) {
    this.setState({
      active: activeItem % this.state.items.length,
      direction: 'right',
    })
  }

  render() {
    return (
      <div id="carousel" className="noselect" onMouseEnter={this.pause} onMouseLeave={this.start}>
        {/* <div className="arrow arrow-left" onClick={this.leftClick}>
          <i className="fi-arrow-left"></i>
        </div> */}

        <CSSTransitionGroup
          transitionName={this.state.direction}
          className="flex02"
        >
          {this.generateItems()}
        </CSSTransitionGroup>

        {/* <div className="arrow arrow-right" onClick={this.rightClick}>
          <i className="fi-arrow-right"></i>
        </div> */}
      </div>
    )
  }
}

export default Carousel
