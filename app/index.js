/********************************************************
Alexander Self
2/13/2017
index.js: Main entry point; where full app is rendered
********************************************************/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'

import App from './containers/App';
import rootReducer from './reducers/index';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { LINKS } from './components/data';
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);


(function() {

  $(document).ready(function() {
    $(".button-collapse").sideNav();
    $('ul.tabs').tabs();
    $('.scrollspy').scrollSpy({scrollOffSet: 50});
    $('.tooltipped').tooltip({delay: 50});
    $('.collapsible').collapsible();
    $('.modal').modal();
  });


  render(<Navbar logo={'Logo'} app={'Information Management'} />, document.getElementById('navbar'));

  render(
    <Provider store={createStoreWithMiddleware(rootReducer, window.devToolsExtension && window.devToolsExtension())}>
      <App />
    </Provider>,
    document.getElementById('app')
  );

  render(<Footer list={LINKS} />, document.getElementById('foot'));
})();
