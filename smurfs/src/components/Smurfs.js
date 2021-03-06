import React from 'react';
import SmurfCard from './SmurfCard';
import SmurfCreator from './SmurfCreator';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/fetchSmurfs'

const Smurfs = props => {
  return (
    <div>
      <button onClick={props.fetchSmurfs}>Show Smurf Village</button>
      <SmurfCreator />
      <SmurfCard smurfs={props.smurfs} />
    </div>
  )
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error,
  smurfs: state.smurfs
})

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs)