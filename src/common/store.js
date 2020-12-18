let current = 0

export function getState () {
  return current
}

export function dispatch (payload) {
  current = payload
}
