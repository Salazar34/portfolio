//Disabling right click on the webpage
$('body').on('contextmenu', (e) => {
  return false
})
//Disable draggin for images
$('img').on('mousedown', (e) => {
  e.preventDefault()
})
