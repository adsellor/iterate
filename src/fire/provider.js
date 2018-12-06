import React from 'react'

const FirebaseContext = React.createContext(null)

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {store => <Component {...props} store={store} />}
  </FirebaseContext.Consumer>
)

export default FirebaseContext
export { withFirebase }
