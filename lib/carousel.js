function Carousel (opts) {
  let { imgs, container, control} = opts
  this.imgs = imgs
  this.container = container
  this.control = control
  this.create(imgs, container, control)
}
Carousel.prototype.create = function (imgs, container, control) {
  let docfrag  = document.createDocumentFragment()
  imgs.map((img, index) => {
    let a = document.createElement('a')
    a.className = !index && 'active'
    a.id = index
    docfrag.appendChild(a)
  })
  control.appendChild(docfrag)
  this.addListener({
    target: control,
    event: 'click',
    cb: (e) => {
      if (e.target && e.target.nodeName === 'A') {
        this.removeActive(control.children)
        e.target.className = 'active'
        this.replaceImg(e.target.id)
      }
    }
  })
  this.carouselAutoRun(control)
}
Carousel.prototype.replaceImg = function (i) {
  let imgWrap = document.querySelector('#carouselImg')
  imgWrap.src = this.imgs[i]
  this.triggerAnimation(imgWrap, 'animation-fade')
}
Carousel.prototype.carouselAutoRun = function (control) {
  let i = this.index || 0
  let controls = control.children
  this.timer = setInterval(() => {
    i > 1 ? i = 0 : i++
    this.removeActive(controls)
    controls[i].className = 'active'
    this.replaceImg(i)
    this.index = i
  }, 1000)
}
Carousel.prototype.stop = function () {
  clearInterval(this.timer)
}
Carousel.prototype.start = function () {
  this.carouselAutoRun(this.control)
}
Carousel.prototype.triggerAnimation = function (el, animate) {
  el.classList.remove(animate)
  setTimeout(() => {
    el.classList.add(animate)
  }, 0)
}
Carousel.prototype.addListener = function (opts) {
  let { target, event, cb } = opts
  target.addEventListener(event, cb)
}
Carousel.prototype.removeActive = function (targets) {
  [].map.call(targets, (target) => {
    target.className = ''
  })
}