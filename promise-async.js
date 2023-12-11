const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getCookies () {
// Progression 2: using setTimeout() -- use 1000 units for time parameter
   setTimeout(() => {
      let result = ""
      cookies.forEach((cookie) => {
      result += `<h2>${cookie["name"]}</h2><<br>`
      })
      document.body.innerHTML = result
   }, 1000)
}

//Progression 3: Create a function to creat cookies and create an object of Promise.
function createCookies (){
   return new Promise ((resolve, reject) => {
 // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
   setTimeout(() => {
 // Progression 5: handling errors and adding new cookie to the list
      cookies.push(newCookie)
      resolve(console.log("new cookied added :)")) //handling of errors is done at the end
   }, 2000)
   }) 
}

// Progression 7: creating a new async function
async function fetchCookies () {
   await createCookies()
   getCookies()
}
// calling the new async function
fetchCookies()

