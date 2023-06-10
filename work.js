

var contentHtml =""

devs.forEach((dev)=>{
  contentHtml += `
    <div class="flex justify-center">
      <div class="bg-white mb-4 w-9/12 h-24 px-8 py-6 flex flex-row justify-between items-center">
        <div class="flex flex-row space-x-4 items-center">
          <div class="w-16 h-16 bg-red-400 rounded-full">
            <p class="text-center text-white text-xs pt-6">${dev.image}</p>
          </div>
          <div>
            <div>
              <span class="text-blue-400 text-xs">${dev.nameImage} <span class="bg-blue-400 text-white rounded-2xl text-center text-xs py-1 px-1">NEW!</span> <span class="bg-black text-white rounded-2xl text-center py-1 px-1">FEATURED</span> </span>
            </div>
            <p class="font-semibold">
              ${dev.work}
            </p>
            <div>
              <span class="text-blue-400 text-xs" >${dev.time} .</span> <span class="text-blue-400 text-xs">${dev.mode} .</span> <span class="text-blue-400 text-xs">${dev.country}</span>
            </div>
          </div>
        </div>
       
        <div>
          <span class="text-blue-400 text-xs bg-blue-100 font-semibold px-1 py-1 cursor-pointer hover:bg-blue-200">${dev.type}</span>
          <span class="text-blue-400 text-xs bg-blue-100 font-semibold px-1 py-1 cursor-pointer hover:bg-blue-200">${dev.leve}</span>
          <span class="text-blue-400 text-xs bg-blue-100 font-semibold px-1 py-1 cursor-pointer hover:bg-blue-200">${dev.work1}</span>
          <span class="text-blue-400 text-xs bg-blue-100 font-semibold px-1 py-1 cursor-pointer hover:bg-blue-200">${dev.work2}</span>
          <span class="text-blue-400 text-xs bg-blue-100 font-semibold px-1 py-1 cursor-pointer hover:bg-blue-200">${dev.work3}</span>
        </div>
      </div>
    </div>

  `
})
document.querySelector('#htmlProd').innerHTML = contentHtml
