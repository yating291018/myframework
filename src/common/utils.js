export const isNull = value => {
  return value || '-'
}

let count = 0
setTimeout(() => {
  count = 10
}, 1000)
export const fn = () => {
  console.log(count)
}
