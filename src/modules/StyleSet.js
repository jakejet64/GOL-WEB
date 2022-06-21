import Style from './Style.js';

export default class StyleSet {
  constructor() {
    this.styles = [];
  }

  addStyle(style) {
    this.styles[this.styles.length] = style;
  }

  getStyles() {
    return this.styles;
  }
}
