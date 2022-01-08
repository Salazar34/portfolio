//Disabling right click on the webpage
$('body').on('contextmenu', (e) => {
  return false
})
//Disable draggin for images
$('img').on('mousedown', (e) => {
  e.preventDefault()
})

$('.navbar-burger').on('click', () => {
  $('.navbar-burger').toggleClass('is-active')
  $('.navbar-menu').toggleClass('is-active')
})
