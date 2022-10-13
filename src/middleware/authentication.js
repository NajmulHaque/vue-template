export default ({ to, from, next }) => {
  // Your custom if statement
  if (!localStorage.getItem('userName')) {
    next("/login")
    return false
  }
  next()
}