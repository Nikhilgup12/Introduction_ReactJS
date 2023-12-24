const className = 'greeting'
const name = 'Nikhil'
const users = {fullName: 'Nihkil', lastName: 'Gupta'}
const fullName = user => user.fullName + ' ' + user.lastName
const element = (
  <div>
    <h1 className={className}> Hello {fullName(users)} </h1>
    <h1> Millionar </h1>
    <p> hope,trust </p>
  </div>
)
const rootElement = document.getElementById('root')
ReactDOM.render(element, rootElement)
