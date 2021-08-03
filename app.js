
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bold: false
    }
  }

  handleClick() {
    //console.log('Click!')
    this.setState({
      bold: !this.state.bold
    })
  }

  render() {

    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    }
    return (
      <div>
        <li style={style} onMouseOver={this.handleClick.bind(this)}>{this.props.item}</li>
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