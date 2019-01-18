import React from 'react';

class AddPlayer extends React.Component {
  constructor(){
    super();
    this.state = {
      name:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
      })
    
  }
  
  componentDidUpdate(prevProps, prevState){
    
    if (prevProps.editItem !== this.props.editItem && this.props.isEdit === true) {

      this.setState({
        name: this.props.editItem.name
      })
    } 
    
  }
  componentDidMount() {
   
    if (this.props.editItem.hasOwnProperty('name') && this.props.isEdit === true){
      this.setState({
        name: this.props.editItem.name
      })
    }
    
  }
  render(){
 
    return (
      <>
          <div className="field">
            <p className="control has-icons-left">

              <input className="input" type="text" 
                    placeholder="Player Name"  
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">

              <button className="button is-info" 
                      disabled={this.state.name.length > 0 ? false : true}
                      onClick={ this.props.isEdit === false ? 
                                 () => this.props.addPlayerName(this.state.name) : 
                                () => this.props.editPlayerName(this.state.name, this.props.editItem.id)
                      }>

                      {
                          this.props.isEdit === false ? 'Add New Player' : 'Edit Player'
                      }
              </button>
              
            </p>
          </div>
      </>
    )
  }
}


export default AddPlayer
