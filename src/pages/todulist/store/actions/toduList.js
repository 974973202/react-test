export const handleChange = (value) => ({
  type: 'CHANGE_TYPE',
  value
})

export const handleClick = (value) => ({
  type: 'CLICK_TYPE',
  value
})

export const handleDelete = (index) => ({
  type: 'DELETE_TYPE',
  value: index
})