const lStorage = {
    setLocalStorage: (key, value) => localStorage.setItem(key, value),
    getLocalStorage: key => localStorage.getItem(key),
  };

  const storage = (type = 'lStorage') => {
    const types = {
      lStorage,
    };
    if (typeof(Storage) !== 'undefined') {
      return types[type];
    }
    return types['lStorage'];
  };

export default storage;