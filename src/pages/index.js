import React from 'react';
import { Helmet } from "react-helmet";
import Button from '../components/Button';
import Base from '../components/Base/Base';

class IndexPage extends React.Component {

  constructor() {
    super();
    this.state = {
      player: [],
      isList: true,
      isEdit: false,
      editData:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.addPlayerName = this.addPlayerName.bind(this);
    this.editPlayerName = this.editPlayerName.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleClick(){
    this.setState(prevState => {
      return {
        isList: !prevState.isList,
        isEdit: false 
      }
    })
  }

  addPlayerName(stateName){
    
    this.setState(prevState => {
      const nameArray = [{
        id:Math.floor(Math.random() * 100),
        name:stateName
      }]
      return {
        player: [...nameArray, ...prevState.player],
        isList: true,
        
      }
    })    
  }

  editPlayerName(name,id) {

    this.setState(prevState => {
      const editArray = prevState.player.map((item, index) => {
        if (item.id === id) {
          item.name = name;
        }
        return{
          id:item.id,
          name:item.name
        }
        
      })
      console.log('editArray = ',editArray)
      return {
        player: [...editArray],
        isList: true,

      }
    })
  }

  handleDelete(id){
    
    this.setState(prevState => {
      prevState.player.map((item,index)=> {
          if(item.id === id){
            prevState.player.splice(index,1);
          }
          return '';
      })
    })
    this.forceUpdate();   
  }
  handleEdit(id){
  
    let editItem;
    this.setState(prevState => {
      prevState.player.map((item, index) => {
          if (item.id === id) {
            editItem = {
                          id:item.id,
                          name: item.name,
                      };
          }
          return '';
      })
        return {
          isList: !prevState.isList,
          isEdit: true,
          editData: editItem
          
        }
    });

  }
  render(){
    // console.log('render',this.state)
    // console.clear();
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/snap.js/1.9.3/snap.min.js"></script>
        </Helmet>

        <Base list={this.state.player.length > 0 ? this.state.player : []} 
              isList={this.state.isList} 
              addPlayerName={this.addPlayerName}
              editPlayerName={this.editPlayerName}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              isEdit={this.state.isEdit}
              editItem={this.state.editData}
              />

        <Button isList={this.state.isList} 
                click={this.handleClick}  
                isEdit={this.state.isEdit}
                />
      </>
    )
  }
}


export default IndexPage
