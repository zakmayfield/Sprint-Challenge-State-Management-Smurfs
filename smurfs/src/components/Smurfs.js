import React from 'react';
import SmurfCard from './SmurfCard'
import { connect } from 'react-redux';

const Smurfs = props => {
  return (
    <div>
      <h2>Smurf Component</h2>
      <SmurfCard smurfs={props.smurfs} />
    </div>
  )
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error,
  smurfs: state.smurfs
})

export default connect(mapStateToProps, {})(Smurfs)