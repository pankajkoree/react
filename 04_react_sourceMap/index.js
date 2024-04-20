
// const h2 = React.createElement('h2', { className: 'subheading' }, 'Hello React'); // in body using console.dir(document.body) there is class as className

//console.log(h2)

// creating a React window
// const container =
//     <div className="containerclass" id="containerid">
//         <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
//             style={{
//                 width: 200
//             }}></img>
//         <h1>React</h1>
//         <p>The library for web and native user interfaces</p>
//         <div><button>Learn React</button><button>API Reference</button></div>
//         <section>
//             <form>
//                 <div id="divUsername" className="form-fiedl"><label htmlFor="username">Username : </label>
//                     <input id="username" type="text"></input>
//                 </div>
//                 <div id="divPassword" className="form-fiedl"><label htmlFor="password">Password : </label><input
//                     id="password"></input>
//                 </div>
//             </form>
//         </section>
//     </div>

const user = 'pankaj';
// react doesn't shows true, false, null, undefined directly --- if we want to show we need to use toString()
const h2 = <h2>Hello {user}</h2>

// Render the 'h2' element

console.log(h2)
// const domNodeId = document.querySelector('#root');
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(h2);
