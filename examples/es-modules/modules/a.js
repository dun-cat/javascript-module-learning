let title = "It's a title"
const myObj = {
  a: 1,
  b: 2
}
function greeting() { console.log("hello wrold") }

console.log(import.meta)
console.log(new URL(import.meta.url).searchParams.get("b"))
console.log(import.meta.resolve("./b.js"))

export { title, greeting, myObj }
export default greeting