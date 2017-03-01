let nextEmployerId = 0

export const addEmployer = employer => {
  return {
    payload: Object.assign(
      {},
      employer,
      {id: nextEmployerId++}
    ),
    type: 'ADD_EMPLOYER'
  }
}

export const removeEmployer = employerId => {
  return {
    payload: employerId,
    type: 'REMOVE_EMPLOYER'
  }
}
