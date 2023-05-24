// import React from "react";
// import { v4 as uuid } from "uuid";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// // import Lists from "./components/Lists";
// // import ListPage from "./pages/ListPage";
// import Lists from "./Lists";
// import ListPage from "./ListPage";

// function Test1() {
//   const [lists, setLists] = React.useState([
//     { id: uuid(), title: "Groceries" },
//     { id: uuid(), title: "Movies" },
//     { id: uuid(), title: "Books" }
//   ]);

//   function addList(list) {
//     setLists([...lists, list]);
//   }

//   function removeList(id) {
//     const tempLists = lists.slice();
//     const index = tempLists.findIndex((list) => list.id === id);
//     tempLists.splice(index, 1);
//     setLists(tempLists);
//   }

//   return (
//     <Router>
//       <Lists data={lists} onAddList={addList} onRemoveList={removeList} />

//       <Switch>
//         {lists.map((list) => (
//           <Route key={list.id} path={"/" + list.id}>
//             <ListPage list={list} />
//           </Route>
//         ))}
//         <Route path="/">
//           <p>Homepage</p>
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default Test1;
