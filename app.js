var GroceryList = () => {
  return (
  <div>
    <p>Grocery List: </p>
    <ul>
      <Bread />
      <Carrot />
    </ul>
  </div>
  );
},
Bread = () => {
  return (
    <li>bread</li>
  )
},
Carrot = () => {
  return (
    <li>carrot</li>
  )
};

ReactDOM.render(<GroceryList />, document.getElementById('app'))