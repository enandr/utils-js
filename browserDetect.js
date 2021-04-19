class BrowserDetector {
  constructor() {
    this.browser = {};
    this.unsupportedBrowsers = {
      Chrome: 0,
      Firefox: 0,
      IE: 0,
      Edge: 0,
      Opera: 0,
      Safari: 0
    };

    this._detectBrowser();
  }

  _detectBrowser() {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes('Msie/')) {
      // IE
      const name = "IE";
      const fullVersion = userAgent.split('Msie/')[1].split(' ')[0];
      const baseVersion = parseInt(fullVersion.split('.')[0]);
      this.browser = {name,fullVersion,baseVersion};
    } else if (userAgent.includes('Trident')) {
      // IE
      const name = "IE";
      const fullVersion = userAgent.split('Trident/')[1].split(' ')[0];
      const baseVersion = parseInt(fullVersion.split('.')[0]);
      this.browser = { name, fullVersion, baseVersion };
    } else if (userAgent.includes('Edg')) {
      // Edge (Chromium)
      const name = "Edge";
      const fullVersion = userAgent.split('Edg/')[1].split(' ')[0];
      const baseVersion = parseInt(fullVersion.split('.')[0]);
      this.browser = { name, fullVersion, baseVersion };
    } else if (userAgent.includes('Edg')) {
      // Edge (Chromium)
      const name = "Edge";
      const fullVersion = userAgent.split('Edg/')[1].split(' ')[0];
      const baseVersion = parseInt(fullVersion.split('.')[0]);
      this.browser = { name, fullVersion, baseVersion };
    } else if (userAgent.includes('Edge')) {
      // Edge (Legacy)
      const name = "Edge";
      const fullVersion = userAgent.split('Edge/')[1].split(' ')[0];
      const baseVersion = parseInt(fullVersion.split('.')[0]);
      this.browser = { name, fullVersion, baseVersion };
    }else if (userAgent.includes('Chrome')) {
      // Chrome
      const name = "Chrome";
      const fullVersion = userAgent.split('Chrome/')[1].split(' ')[0];
      const baseVersion = parseInt(fullVersion.split('.')[0]);
      this.browser = { name, fullVersion, baseVersion };
    } else if (userAgent.includes('Safari')) {
      // Safari
      const name = "Safari";
      const fullVersion = userAgent.split('Safari/')[1].split(' ')[0];
      const baseVersion = parseInt(fullVersion.split('.')[0]);
      this.browser = { name, fullVersion, baseVersion };
    }
  }

  isSupported(callback) {
    if (this.unsupportedBrowsers.hasOwnProperty(this.browser.name)) {
      if (this.browser.baseVersion > this.unsupportedBrowsers[this.browser.name]) {
        return true;
      }
    }

    if (callback) {
      callback();
    }
    return false;
  }

  minimumVersions(browsers) {
    this.unsupportedBrowsers = browsers;
  }
}
export default new BrowserDetector();
