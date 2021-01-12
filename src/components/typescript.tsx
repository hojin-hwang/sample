import * as React from 'react';
import Counter from './counter';
import Greetings from './greeting';
import MyForm from './myform';
import ReducerSample from './reducerSample';

//const Script : React.FC = function(){ //React.FC 라고 정의
//const Script : React.FC = () => { //위와 같은 의미

const this_header_sytle = {
  minHeight : '10vh'
}

const optional : string = "And Good night" ;

function Typescript(){

  const onClickGreetings = (name: string) => {
    console.log(`${name} says hello`);
  };

  const myformSubmit  = (form: { name: string; description: string }) => {
    console.log(form);
  };

return (
  <div className="App">
    <header className="App-header" style={this_header_sytle}>
      <img src="/images/logo.png" className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    
    <Greetings  name="Hello" optional = {optional} onClick={onClickGreetings}/>
    <Counter />
    
    <MyForm onSubmit={myformSubmit } />

    <ReducerSample />
  </div>
);
}
export default Typescript;