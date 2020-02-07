import _ from 'lodash'
function component() {
  const element= document.createElement('div')
  element.innerHTML = _.json(['Hello', 'webpack'], ' ')
  // element.innerHTML = 'string'
  return element
}
document.body.appendChild(component())