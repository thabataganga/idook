import React from 'react';
import IDSummary from './IdSummary';

const IDList = ({id}) => {
    return (
        <div className='project-list section'>
            {id && id.map(id => {
                return (
                    <IDSummary id={id} key={id.id}/>
                )
            })}
            
        </div>   
    )
}

export default IDList;