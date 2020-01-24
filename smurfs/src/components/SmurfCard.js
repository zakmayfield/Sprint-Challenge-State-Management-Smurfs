import React from 'react';

const SmurfCard = props => {
  return (
    <div>
      <div>
        {
          props.smurfs.map(smurf => {
            return (
              <div key={smurf.id} style={{borderBottom: '1px solid lightgray'}}>
                <span style={{marginRight: '5vw'}}>{smurf.name}</span>
                <span>Age: {smurf.age}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SmurfCard