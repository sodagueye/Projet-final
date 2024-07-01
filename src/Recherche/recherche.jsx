var List = React.createClass({
    render: function(){
      return (
        <ul className={this.props.focused} >
          {
            this.props.items.map(function(item, i) {
              return (
                <li onClick={this.props.clickLI.bind(this, i, item)} key={i}>{item}</li>
              )
            }.bind(this))
          }
        </ul>
      )  
    }
  });
  
  var FilteredList = React.createClass({
    filterList: function(event){
      this.setState({value: event.target.value});
      this.setState({focused: true});
      var updatedList = this.state.initialItems;
      updatedList = updatedList.filter(function(item){
        return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });
      this.setState({items: updatedList});
    },
    getInitialState: function(){
      return {
        initialItems: [
          "Jean",
          "Pierre",
          "Jacques",
          "Noémie",
          "Émilie",
          "Michel",
          "Philémon",
          "René",
          "Julie",
          "Jean-Michel"
        ],
        items: [],
        focused: false,
        value:""
      }
    },
    onBlur: function() {
      console.log('blur')
      this.setState({focused: false});
      this.filterList;
    },
    clickLI: function(i, props) {
      this.setState({
        value: props,
        focused: false
      });
    },
    componentWillMount: function(){
      this.setState({items: this.state.initialItems})
    },
    render: function(){
      return (
        <div className="filter-list" >
          <input type="text" placeholder="Search" onChange={this.filterList} value={this.state.value} />
          <List items={this.state.items} focused={this.state.focused} clickLI={this.clickLI} />
        </div>
      );
    }
  });
  
  ReactDOM.render(<FilteredList/>, document.getElementById('Recherche'));