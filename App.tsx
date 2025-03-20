import { useState } from "react";
import produce from "immer";
import { BsBatteryFull } from "react-icons/bs";
import form from './form';

//import Message from "./Message";
//import reactLogo from "./assets/react.svg";
//import bootstrap from 'node_modules\bootstrap\dist\css\bootstrap.css';
//If we click on this button, we should treat state objects as immutable or readable
import ListGroup from "./ListGroup";
import Button from "./Button";
import module from "./module-5-12";

function App() {
  return form();
}
  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "Bug 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);
  // const handleClick = () => {
  //   setBugs(
  //     produce((draft) => {
  //       const bug = draft.find((bug) => bug.id === 1);
  //       if (bug) bug.fixed = true;
  //     })
  //   );
  //   // setBugs(bugs.map(bug => bug.id === 1? {...bug, fixed: true} : bug));
  // };
  // // const [firstName, setFirstName] = useState("");
  // // const [lastName, setLastName] = useState("");
  // // const [isLoading, setLoading] = useState(false);
  // // const [person, setPerson] = useState({
  // //   firstName: "",
  // //   secondName: "",
  // // });
  // // const fullName = firstName + " " + lastName;
  // // return <div>{fullName}</div>;
  // return (
  //   <div>
  //     {bugs.map(bug => <p key = {bug.id}>{bug.title} {bug.fixed? 'Fixed': 'New'}</p>)}
  //     <button onClick={handleClick}>Click Me</button>
  //   </div>
  // );
  // const [bugs, setBugs] = useState([
  //         {id: 1, title: 'Bug 1', fixed: false},
  //         {id: 2, title: 'Bug 2', fixed: false},
  //     ]);
  //     const handleClick = () => {
  //         setBugs(
  //             produce(bugs, (draft) => {
  //                 const bug = draft.find((bug) => bug.id === 1);
  //                 if (bug) bug.fixed = !bug.fixed;
  //             })
  //         );
  //     };
  
      // return (
      //     module()
      // )
//       const [game, setGame] = useState({
//         id: 1,
//         player: {
//           name: 'John',
//         },
//       });
//       const handleClick = () => {
//         setGame({ ...game, player: { name: 'Bob'}})
//       }
// }

export default App;
