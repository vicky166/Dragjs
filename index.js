
Draggable.create(".vicky", {
  type: "x,y",
  bounds: ".ui-draggable__text-wrapper",
  inertia: true,
  snap: {
    x: function (value) {
      return Math.round(value / valueX) * valueX;
    },
    y: function (value) {
      return Math.round(value / valueY) * valueY;
    }
  }
});
Draggable.create(".vicky-two", {
  type: "x,y",
  bounds: ".ui-draggable__text-wrapper",
  inertia: true,
  snap: {
    x: function (value) {
      return Math.round(value / valueX) * valueX;
    },
    y: function (value) {
      return Math.round(value / valueY) * valueY;
    }
  }
});
Draggable.create(".vicky-three", {
  type: "x,y",
  bounds: ".ui-draggable__text-wrapper",
  inertia: true,
  snap: {
    x: function (value) {
      return Math.round(value / valueX) * valueX;
    },
    y: function (value) {
      return Math.round(value / valueY) * valueY;
    }
  }
});
particlesJS('particles-js', {
  particles: {
    number: { value: 300 }, 
    color: { value: '#ffffff' },
    shape: { type: 'triangle', stroke: { width: 0, color: '#000000' } },
    opacity: { value: 0.5, random: false, anim: { enable: false } },
    size: { value: 3, random: true, anim: { enable: false } },
    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
  },
  retina_detect: true
});