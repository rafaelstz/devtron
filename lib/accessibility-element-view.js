'use strict'

const SelectableView = require('./selectable-view')

class AccessibilityElementView extends SelectableView {
  constructor (element, parent) {
    super('element-row')

    this.path = element
    parent.appendChild(this.element)
    this.render()
    this.handleEvents(parent)
  }

  handleEvents (parent) {
    this.listenForSelection(parent)
    this.listenForSelectionKeys(parent.parentElement)
  }

  render () {
    this.selectorPath.textContent = this.path
  }

  filter (searchText) {
    let matches = this.path.toLowerCase().includes(searchText)
    matches ? this.show() : this.hide()
    return matches
  }
}

module.exports = AccessibilityElementView
