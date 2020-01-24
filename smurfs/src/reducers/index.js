
const initialState = {
  isLoading: false,
  error: '',
  smurfs: [
    {
      name: "Rocky",
      age: 145,
      height: "4cm",
      id: 1
    }
  ]
}

export const reducer = (state = initialState, action) => {
  switch(action.type){

    default:
      return state
  }
}