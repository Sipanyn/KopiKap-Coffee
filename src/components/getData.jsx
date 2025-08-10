 async function getData(){
  let res=await fetch(`https://coffeeproducts.liara.run/AllProducts`)
  let data=res.json() 
  return data
}
    

export default getData
