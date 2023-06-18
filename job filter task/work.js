

var contentHtml =""

devs.forEach((dev)=>{
  contentHtml += `
    <div class="flex justify-center mb-12 md:mb-0">
      <div class="bg-white border-l-4 border-cyan-600 mb-4 w-9/12 h-auto relative px-8 pt-12 md:py-6 flex flex-col md:flex-row justify-between md:items-center">
        <div class="flex flex-col md:flex-row space-x-4 md:items-center">
          <div class="w-16 absolute bottom-60 md:relative md:bottom-0 ">
          <img src="${dev.image}" alt="image">
          </div>
          <div>
            <div class="">
              <span class="text-cyan-600 text-xs">${dev.nameImage} <span class="bg-cyan-600 text-white rounded-2xl md:text-center text-xs py-1 px-2">NEW!</span> <span class="bg-cyan-900 text-xs text-white rounded-2xl md:text-center py-1 px-2">FEATURED</span> </span>
            </div>
            <p class="py-4 md:py-0 font-semibold">
              ${dev.work}
            </p>
            <div class=" border-b-2 pb-4 md:border-b-0 md:pb-0">
              <span class="text-gray-500 text-xs" >${dev.time} .</span> <span class="text-gray-500 text-xs">${dev.mode} .</span> <span class="text-gray-500 text-xs">${dev.country}</span>
            </div>
          </div>
        </div>
       
        <div class="py-4 md:py-0 space-x-3 space-y-3 md:space-x-2 md:space-y-0">
        <a href="./filter.html"><button id="typed" class="text-cyan-600 text-xs bg-cyan-100 font-semibold px-2 py-1 cursor-pointer hover:bg-cyan-200"> ${dev.type}</button></a>


          <button id="level" class="text-cyan-600 text-xs bg-cyan-100 font-semibold px-2 py-1 cursor-pointer hover:bg-cyan-200">${dev.level}</button>


          <button id="workOne" class="text-cyan-600 text-xs bg-cyan-100 font-semibold px-2 py-1 cursor-pointer hover:bg-cyan-200">${dev.work1}</button>


          <button id="workTwo" class="text-cyan-600 text-xs bg-cyan-100 font-semibold px-2 py-1 cursor-pointer hover:bg-cyan-200">${dev.work2}</button>


          <button id="workThree" class="text-cyan-600 text-xs bg-cyan-100 font-semibold px-2 py-1 cursor-pointer hover:bg-cyan-200">${dev.work3}</button>
        </div>
      </div>
    </div>

  `
})
document.querySelector('#htmlProd').innerHTML = contentHtml

const typed = document.querySelectorAll('#typed')

typed.forEach((button)=>{
  button.addEventListener('click', ()=>{
    // if(devs.type === 'Frontend'){
      var filtered = devs.filter(el=>{
        if (el.type === 'Fullstack'){
          return true
        }
      })
      console.log(filtered)
    // }
    
   
      // if (devs.type === 'Frontend'){
        // frontFilter = devs.filter((el)=>{
        //   return el.type === 'Frontend'
        // })
        // console.log(frontFilter)
      // } else if(dev.type === 'Fullstack'){
      //   fullFilter = [filtered, dev]
      //   console.log(fullFilter)
      // }else if(dev.type === 'Backend'){
      //   backFilter = [filtered, dev]
      //   console.log(backFilter)
      // }
      
    
      localStorage.setItem('filtered', JSON.stringify(filtered));

  })
})


// const front = document.getElementById('front')
// const back = document.getElementById('back')
// const full = document.getElementById('full')


// let filter=""
// const func = ()=>{

//   front.addEventListener('click', ()=>{
//     filter = devs.filter((el)=>{
//       return el.type === 'Frontend'
//     })
    // console.log(filter)
    // filtered = filter
    // console.log(filtered)
  // })
  // localStorage.setItem(filtered, JSON.stringify('filtered'))



  

  // back.addEventListener('click', ()=>{
  //   filter = devs.filter((el)=>{
  //     return el.type === 'Backend'
  //   })
  // })


  

  // full.addEventListener('click', ()=>{
  //   filter = devs.filter((el)=>{
  //     return el.type === 'Fullstack'
  //   })
  // })
  // localStorage.setItem(filtered, JSON.stringify('filtered'))
// }
// func()
