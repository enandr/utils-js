class Utils {
  randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  randomFromArray(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  highlightKeyWords(element, spanClass, keywords) {
    element.forEach(elem => {
        let text = elem.innerText;
        let newHtml = '';
        text = text.split(' ');
        text.forEach(word => {
          let toAdd = ' ';
          const hasComma = word.includes(',');
          const hasPeriod = word.includes('.');
          let tempWord = word.replace(',', '').replace('.', '');
          if (hasComma) {
            toAdd = ', ';
          } else if (hasPeriod) {
            toAdd = '. ';
          }
          if (keywords.includes(tempWord)) {
            newHtml += `<span class="${spanClass}">${tempWord}</span>${toAdd}`;
          } else {
            newHtml += `${tempWord}${toAdd}`;
          }
        })

        elem.innerHTML = newHtml;
      })
    }
}

export default new Utils;
