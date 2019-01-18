import React from 'react';
import TeamList from './../TeamList/TeamList';
import './../Base/Base.css';
import AddPlayer from '../AddPlayer/addplayer';

const Base = (props) => {

    return(
        <div className="baseContainer">
                {
                    props.isList ? 
                    
                    <TeamList   playerList={props.list} 
                                handleDelete={props.handleDelete}
                                handleEdit={props.handleEdit} /> :

                    <AddPlayer addPlayerName={props.addPlayerName}
                                isEdit={props.isEdit}
                                editItem={props.editItem}
                                editPlayerName={props.editPlayerName}
                    />
                }
                
            </div>
)}

export default Base;