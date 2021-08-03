
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>{this.props.item}</li>
      </div>
    );

  }

}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList items={['Carrots', 'Bread']} />, document.getElementById('app'))