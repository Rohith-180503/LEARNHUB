export function safeReadStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function safeWriteStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignore blocked storage */
  }
}
