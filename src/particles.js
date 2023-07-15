export default {
  fpsLimit: 120,
  interactivity: {
      events: {
          onClick: {
              enable: false,
              mode: 'repulse'
          },
          onHover: {
              enable: false,
              mode: 'repulse'
          },
          resize: true
      },
      modes: {
          bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 400
          },
          push: {
              quantity: 4
          },
          repulse: {
              distance: 200,
              duration: 0.4
          }
      }
  },
  particles: {
      color: {
          value: '#c4d3e7'
      },
      links: {
          color: '#c4d3e7',
          distance: 120,
          enable: true,
          opacity: 1,
          width: 1
      },
      collisions: {
          enable: true
      },
      move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 2,
          straight: false
      },
      number: {
          density: {
              enable: true,
              area: 800
          },
          value: 140
      },
      opacity: {
          value: 0.5
      },
      shape: {
          type: 'circle'
      },
      size: {
          random: true,
          value: 4
      }
  },
  detectRetina: true
}