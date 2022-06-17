console.log('Welcome to 30DaysOfJavaScript')
<script>
// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
​
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))
</script>