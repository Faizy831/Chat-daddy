const LocalStorageService = (function () {
  let _service: any;
  function _getService(this: {
    getService: () => any;
    setToken: (token: string) => void;
    getAccessToken: () => string | null;
    clearToken: () => void;
  }) {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setToken(token: string) {
    localStorage.setItem("access_token", token);
  }
  function _getAccessToken() {
    return localStorage.getItem("access_token");
  }
  function _clearToken() {
    localStorage.removeItem("access_token");
  }
  return {
    getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    clearToken: _clearToken,
  };
})();
export default LocalStorageService;
