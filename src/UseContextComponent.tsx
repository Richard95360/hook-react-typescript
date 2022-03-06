import { useState, useContext } from 'react';
import UserContext,{UserState} from './store'


function ConsumerComponent() {
    const user = useContext<UserState>(UserContext)

    return (
        <div>
            <div><strong>First : </strong>{user.first}</div>
            <div><strong>Last : </strong>{user.last}</div>
        </div>
    )
}

 function UseContextComponent() {
     const [user, setuser] = useState<UserState>({
            first:"Jane",
            last:"Smith"
     });
  return (
    <UserContext.Provider value={user}>
     <ConsumerComponent />
     <button
     onClick={() => setuser({
        first:"Josie",
        last:"Wales"
     })}
     >
         change context
     </button>
    </UserContext.Provider>
  )
}


export default UseContextComponent;
