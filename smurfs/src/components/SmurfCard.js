import React from 'react';

const SmurfCard = props => {
  return (
    <div>
      <h2>SmurfCard Component</h2>
      <div>
        {
          props.smurfs.map(smurf => {
            return <p key={smurf.id}>{smurf.name}</p>
          })
        }
      </div>
    </div>
  )
}

export default SmurfCard