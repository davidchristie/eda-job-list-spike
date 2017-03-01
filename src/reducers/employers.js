export default (state = [], {payload, type}) => {
  switch (type) {
    case 'ADD_EMPLOYER':
      return [...state, payload]

    case 'REMOVE_EMPLOYER':
      return state.filter(employer => employer.id !== payload)

    default:
      return state
  }
}
