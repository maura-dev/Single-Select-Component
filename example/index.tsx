import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';

const App = () => {
  const handlefunc = (e: any) => {
    console.log(e);
  };
  return <div></div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
