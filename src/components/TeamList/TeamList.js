import React from 'react';
// import SwipeToDelete from 'react-swipe-to-delete-component';
import '../../../node_modules/react-swipe-to-delete-component/dist/swipe-to-delete.css';

import '../../../node_modules/rc-swipeout/assets/index.css';
import Swipeout from 'rc-swipeout';


const TeamList = (props) => {
    
    let list;
    if (props.playerList.length > 0){

        list = props.playerList.map(function (item, index) {
            
            if(item === undefined){
                return '';
            }
            return (

                // <SwipeToDelete key={index} onDelete={() => props.handleDelete(item.id)}>
                //     <li><a className="cusotomList">{item.name}</a></li>
                // </SwipeToDelete>
                
                <Swipeout
                    key={index} 
                    right={[
                        {
                            text: <span className="icon is-small is-left"><i className="fas fa-pen"></i></span>,
                            onPress: () => { props.handleEdit(item.id) },
                            style: { backgroundColor: 'orange', color: 'white' },
                            className: 'custom-class-1'
                        },
                        {
                            text: <span className="icon is-small is-left"><i className="fas fa-trash-alt"></i></span>,
                            onPress: () => { props.handleDelete(item.id)},
                            style: { backgroundColor: 'red', color: 'white' },
                            className: 'custom-class-2'
                        }
                    ]}>

                        <li style={{ height: 44 }}><a className="cusotomList">{item.name}</a></li>

                </Swipeout>

            )
        })
    }
    console.clear();
    return (
        
        
        <aside className="menu customTeamListContainer">
            
            <ul className="menu-list">
                <li>
                    <a className="is-active customListHeading">ICT - International Cricket Team</a>
                    <ul>  
                        {list}
                    </ul>
                </li>
            </ul>
        </aside>
    
)}

export default TeamList;