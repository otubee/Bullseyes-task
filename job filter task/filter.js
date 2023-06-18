
var filtered = JSON.parse(localStorage.getItem('filtered')) || [];
console.log(filtered)

localStorage.clear()

var filterHtml =""

filtered.forEach((filter)=>{
  filterHtml += `
  <div class="flex justify-center mb-12 md:mb-0">
    <div class="bg-white border-l-4 border-cyan-600 mb-4 w-9/12 h-auto relative px-8 pt-12 md:py-6 flex flex-col md:flex-row justify-between md:items-center">
      <div class="flex flex-col md:flex-row space-x-4 md:items-center">
        <div class="w-16 absolute bottom-60 md:relative md:bottom-0 ">
        <img src="${filter.image}" alt="image">
        </div>
        <div>
          <div class="">
            <span class="text-cyan-600 text-xs">${filter.nameImage} <span class="bg-cyan-600 text-white rounded-2xl md:text-center text-xs py-1 px-2">NEW!</span> <span class="bg-cyan-900 text-xs text-white rounded-2xl md:text-center py-1 px-2">FEATURED</span> </span>
          </div>
          <p class="py-4 md:py-0 font-semibold">
            ${filter.work}
          </p>
          <div class=" border-b-2 pb-4 md:border-b-0 md:pb-0">
            <span class="text-gray-500 text-xs" >${filter.time} .</span> <span class="text-gray-500 text-xs">${filter.mode} .</span> <span class="text-gray-500 text-xs">${filter.country}</span>
          </div>
        </div>
      </div>
    
      <div class="py-4 md:py-0 space-x-3 space-y-3 md:space-x-2 md:space-y-0">
      <a><button id="typed" class="text-cyan-600 text-xs bg-cyan-100 font-semibold px-2 py-1 cursor-pointer hover:bg-cyan-200"> ${filter.type}</button></a>


        <button id="level" class="text-cyan-600 text-xs bg-cyan-100 font-semibold px-2 py-1 cursor-pointer hover:bg-cyan-200">${filter.level}</button>


        <button id="workOne" class="text-cyan-600 text-xs bg-cyan-100 font-semibold px-2 py-1 cursor-pointer hover:bg-cyan-200">${filter.work1}</button>


        <button id="workTwo" class="text-cyan-600 text-xs bg-cyan-100 font-semibold px-2 py-1 cursor-pointer hover:bg-cyan-200">${filter.work2}</button>


        <button id="workThree" class="text-cyan-600 text-xs bg-cyan-100 font-semibold px-2 py-1 cursor-pointer hover:bg-cyan-200">${filter.work3}</button>
      </div>
    </div>
  </div>

  `
})
console.log(filterHtml)
document.querySelector('#htmlfilter').innerHTML = filterHtml

const cleared = document.getElementById('cleared')

cleared.addEventListener('click', ()=>{
  document.querySelector('#htmlfilter').innerHTML = ""
})