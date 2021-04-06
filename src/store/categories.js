const initialState = {
  categoryList: [
    { _id: 98765, name: 'Electronics', description: 'things that have batteries and plug in' },
    { _id: 12345, name: 'Food', description: 'things that have batteries and plug in' }
  ],
  activatedCategory: '',
  activatedDescription: '',
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'INACTIVE':
      return initialState;
    case 'ACTIVE':
      return { ...state, activatedCategory: payload.category, activatedDescription: payload.description }
    default:
      return state;
  }
}

export const inactive = () => {
  return {
    type: 'INACTIVE'
  }
}

export const active = (category, description) => {
  return {
    type: "ACTIVE",
    payload: {
      category,
      description
    }
  }
}