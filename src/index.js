class HashStore {
  constructor() {}

  _isLocationAvailable() {
    return window && window.location;
  }

  _getHash() {
    let output = "";
    if (this._isLocationAvailable()) {
      const { hash } = window.location;
      if (hash) {
        output = window.decodeURIComponent(hash.substr(1));
      }
    }
    return output;
  }

  _updateStore(store = {}) {
    if (this._isLocationAvailable()) {
      window.location.hash = window.encodeURIComponent(JSON.stringify(store));
    }
  }

  _getStore() {
    if (this._isLocationAvailable()) {
      let result = {};
      const { hash } = window.location;
      if (hash) {
        try {
          result = JSON.parse(this._getHash(hash));
        } catch (e) {
          console.error(e);
        }
      }

      return result;
    }
  }

  setItem(key, value) {
    if (!key || !value) {
      return;
    }
    const store = {};
    store[key] = value;
    this._updateStore(store);
  }

  getItem(key) {
    if (!key) {
      return;
    }
    const store = this._getStore();
    return store[key];
  }

  removeItem(key) {
    if (key && this._isLocationAvailable()) {
      const store = this._getStore();
      if (store[key]) {
        delete store[key];
        this._updateStore(store);
      }
    }
  }

  clear() {
    if (this._isLocationAvailable()) {
      this._updateStore({});
    }
  }
}

export default HashStore;
