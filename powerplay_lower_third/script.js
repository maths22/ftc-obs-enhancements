

function handleResize() {
  const xZoom = window.innerWidth / 1920;
  const yZoom = window.innerHeight / 1080;
  const displayScale = Math.min(xZoom, yZoom);

  // Set the value of variable --blue to another value (in this case "lightblue")
  document.body.style.setProperty('--display-scale', displayScale);
}

window.addEventListener('resize', handleResize)

handleResize()

function toggle(remove, add) {
  const emblem = document.getElementById("emblem");
  const background = document.getElementById("text-background");

  emblem.classList.remove(`emblem-${remove}`)
  background.classList.remove(`text-background-${remove}`)
  // Force style recalc
  emblem.offsetHeight
  emblem.classList.add(`emblem-${add}`)
  background.classList.add(`text-background-${add}`)
}

function show() {
  toggle('out', 'in')
}

function hide() {
  toggle('in', 'out')
}

window.addEventListener('show-pp-third', function(event) {
  document.getElementById("line-1").textContent = event.detail.line_1
  document.getElementById("line-2").textContent = event.detail.line_2
  show()
})

window.addEventListener('hide-pp-third', function(event) {
  hide()
})