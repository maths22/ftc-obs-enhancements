

function handleResize() {
  const xZoom = window.innerWidth / 1920;
  const yZoom = window.innerHeight / 1080;
  const displayScale = Math.min(xZoom, yZoom);

  document.body.style.setProperty('--display-scale', displayScale);
}

window.addEventListener('resize', handleResize)

handleResize()

function toggle(remove, add) {
  const background = document.getElementById("text-background");

  background.classList.remove(`text-background-${remove}`)
  // Force style recalc
  background.offsetHeight
  background.classList.add(`text-background-${add}`)
}

function show() {
  toggle('out', 'in')
}

function hide() {
  toggle('in', 'out')
}

window.addEventListener('show-cs-third', function(event) {
  document.getElementById("line-1").textContent = event.detail.line_1
  document.getElementById("line-2").textContent = event.detail.line_2
  show()
})

window.addEventListener('hide-cs-third', function(event) {
  hide()
})
