import React, {Component} from 'react';
import { Route,Switch } from 'react-router-dom';

//import DisqusComment from './components/Disqus';
import ContentsList from './components/Contents';
import ContentTitle from './components/ContentTitle';
import NotFound from './components/NotFound';
import WriteContent from './route/WriteContent';

import './App.css';

//https://electricburglar.tistory.com/105
// https://velog.io/@pkbird/React-Router-1
class App extends Component {


  render() {
	
    return (
      <div className="App">
		<div className="black-nav">
			<h2> 개발 Blog </h2>	
		</div>
		<Switch>
			<Route exact path="/">
				<ContentTitle />
				<ContentsList/>
			</Route>
			<Route path="/write" >
				<WriteContent/>
			</Route>
			<Route component={NotFound} />
		</Switch>
		
	  </div>
	
    );
  }
}

export default App;
