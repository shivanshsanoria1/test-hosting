function rand(){
  return (Math.floor(Math.random() * 1000000)).toString()
}


document.getElementById('action-btn')
.addEventListener('click', () => {
  console.log('clicked at ' + (new Date()).toISOString())

  document.getElementsByTagName('body')[0].style.backgroundColor = '#' + rand()
})