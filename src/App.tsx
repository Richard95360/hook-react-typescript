import {FunctionComponent} from 'react';

import './App.css';
import CustomHookComponent from './CustomHookComponent';
import UseContextComponent from './UseContextComponent';
import UseEffectComponent from './UseEffectComponent';
import UsereducerComponent from './UsereducerComponent';
import UseRefComponent from './UseRefComponent';
import UseStateComponent from './UseStateComponent';

import EvenMoreReactComponent from './EvenMoreReactComponent';

const App : FunctionComponent = (props) => {

  /* const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
 */
  return (
    <div className="App">
      <h1>Even more React component TS stuff</h1>
      <EvenMoreReactComponent/>
      <h1>useCustom</h1>
      <CustomHookComponent />
      <h1>useRef</h1>
      <UseRefComponent/>
    <h1>useReducer</h1>
    <UsereducerComponent/>
    <h1>UseState</h1>
   <UseStateComponent />
   <h1>UseEffect</h1>
   <UseEffectComponent />
   <h1>UseContext</h1>
   <UseContextComponent />
     {/*  <input
       type="text"
       value={firstName}
       onChange={e => setFirstName(e.target.value)}
        />
         <input
       type="text"
       value={lastName}
       onChange={e => setLastName(e.target.value,)}
        />
        <div>{firstName} {lastName}</div> */}
    </div>
  );
}

export default App;
