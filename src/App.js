import React from 'react';
import { useSelector } from 'react-redux';
import Test from './components/Test'
function App() {
  return (
    <React.Fragment>
      <Test></Test>
      {/* <Header />
      {isAuth ? < UserProfile /> : <Auth />}
      <Counter /> */}
    </React.Fragment>
  );
}

export default App;
