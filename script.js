var c = document.querySelector('.block')
var g = document.querySelector('i')
c.addEventListener('dblclick', function(){
        g.style.opacity = 1
        g.style.rotate = `${0}deg`
        g.style.scale = 1.5
    setTimeout(function(){
        g.style.top = `${0}%`
        g.style.rotate = `${50}deg`
        g.style.fontSize = `${0}px`
      
    },1000)
})