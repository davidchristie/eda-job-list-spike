export default (state = null, {payload, type}) => {
  switch (type) {
    case 'HIDE_EMPLOYER_DETAILS':
      return null

    case 'SHOW_EMPLOYER_DETAILS':
      return payload

    default:
      return state
  }
}
