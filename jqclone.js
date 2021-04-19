function domSelect(selector) {
  const self = {
    elements: document.querySelectorAll(selector),
    on: (event, callback) => {
      self.elements.forEach(elem => {
        elem.addEventListener(event, callback);
      })
    },
    css: (styles) => {
      const keys = Object.keys(styles);
      keys.forEach(key => {
        self.elements.forEach(elem => {
          elem.style[key] = styles[key];
        })
      })
    },
    text: (text) => {
      if (text) {
        self.elements.forEach(elem => {
          elem.innerText = text;
        })

      }
      else {
        return self.elements[0].innerText;
      }
    },
    html: (html) => {
      self.elements.forEach(elem => {
        elem.innerHtml = html;
      })
    }
  }

  return self;
}
