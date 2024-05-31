let tween = gsap.to('#fan', {
  duration: 3,
  rotation: -360,
  ease: 'linear',
  paused: true,
  repeat: -1,
})

let initial = true
let nowSpeed = 0

document.querySelector('.toggle').addEventListener('click', e => {
  // if (initial) {
  //   document.querySelector('.one').classList.add('active')
  //   initial = false
  // }
  if (e.target.classList[1] === 'open') {
    tween.play()
    
    e.target.classList.toggle('open')
    e.target.style.color = 'green'
    document.querySelectorAll('.speed')[nowSpeed].classList.add('active')
  } else {
    tween.pause()
    e.target.classList.toggle('open')
    e.target.style.color = 'grey'
    document.querySelectorAll('.speed')[nowSpeed].classList.remove('active')
  }
})

document.querySelectorAll('.speed').forEach((btn, index) => {
  btn.addEventListener('click', () => {
  if (document.querySelector('.toggle').classList[1] !== 'open') {
      let sec = 3-index
      tween.duration(parseInt(sec))
      for (const speed of document.querySelectorAll('.speed')) {
        speed.classList.remove('active')
      }
      btn.classList.add('active')
      nowSpeed = index
    }
  })
})
