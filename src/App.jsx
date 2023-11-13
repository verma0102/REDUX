import { useSelector } from "react-redux";
import "./Design.css";
const App = () => {
   const users = useSelector(state => state.users.users);
   console.log(users);
   return (
      <>

         {
            users.map(user => (
               <div key={user.id} className="design">
                   <h3><span className='redText'>Name:</span> {user.name}</h3>
                  <h3><span className='redText'>Age:</span> {user.age}</h3>
                  <h3><span className='redText'>Email:</span> {user.email}</h3>
                   
               </div>
            ))
         }
      </>
   )
}
export default App;