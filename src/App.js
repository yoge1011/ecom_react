import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Authentication from './pages/authentication/authentication.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({ 
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      this.setState({ currentUser: userAuth }); 
    })
  }

  componentWillUnmount(){ 
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
