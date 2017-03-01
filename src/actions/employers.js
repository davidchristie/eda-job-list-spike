let nextEmployerId = 0

const defaultEmployer = {
  name: 'Employer'
}

export const addEmployer = employer => {
  return {
    payload: Object.assign(
      {},
      defaultEmployer,
      employer,
      {id: nextEmployerId++}
    ),
    type: 'ADD_EMPLOYER'
  }
}

export const hideEmployerDetails = () => {
  return {
    type: 'HIDE_EMPLOYER_DETAILS'
  }
}

export const removeEmployer = employerId => {
  return {
    payload: employerId,
    type: 'REMOVE_EMPLOYER'
  }
}

export const showEmployerDetails = employerId => {
  return {
    payload: employerId,
    type: 'SHOW_EMPLOYER_DETAILS'
  }
}
