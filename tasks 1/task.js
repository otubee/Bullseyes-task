const btn = document.getElementById('btn');
const price = document.getElementById('price');
const priceOne = document.getElementById('priceone');
const priceTwo = document.getElementById('pricetwo');
const priceThree = document.getElementById('pricethree');
const tog = document.getElementById('toggle');


flag = true

btn.addEventListener('click', ()=>{
  toggle()
})

const toggle = ()=>{
  btn.className = flag ? "w-10 h-5 bg-blue-900 rounded-3xl relative" : "w-10 h-5 bg-blue-900 rounded-3xl relative"
  tog.className = flag ? "bg-white w-5 h-5 rounded-full absolute top-0" : "bg-white w-5 h-5 rounded-full absolute top-0 right-0"

  priceOne.innerHTML = flag ? "199.99" : "19.99"
  priceTwo.innerHTML = flag ? "249.99" : "24.99"
  priceThree.innerHTML = flag ? "399.99" : "39.99"


  flag = !flag
}
