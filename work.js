devs = [
  {
  id: '1',
  image: 'developer',
  nameImage: 'Photosnap',
  work: 'Senior Frontend Developer',
  time: '1d ago',
  mode: 'Full Time',
  country: 'USA only',
  type: 'Frontend',
  leve: 'Senior',
  work1: 'HTML',
  work2: 'CSS',
  work3: 'JavaScript'
},
{
  id: '2',
  image: 'manage',
  nameImage: 'Manage',
  work: 'Fullstack Developer',
  time: '1d ago',
  mode: 'Part Time',
  country: 'Remote',
  type: 'Fullstack',
  leve: 'Midweight',
  work1: 'Python',
  work2: 'React',
},
{
  id: '3',
  image: 'account',
  nameImage: 'Account',
  work: 'Junior Frontend Developer',
  time: '2d ago',
  mode: 'Part Time',
  country: 'USA only',
  type: 'Frontend',
  leve: 'Junior',
  work1: 'React',
  work2: 'Sass',
  work3: 'JavaScript',
},
{
  id: '4',
  image: 'myhome',
  nameImage: 'MyHome',
  work: 'Junior Frontend Developer',
  time: '5d ago',
  country: 'USA only',
  type: 'Frontend',
  leve: 'Junior',
  work1: 'CSS',
  work2: 'JavaScript',
},
{
  id: '5',
  image: 'loop',
  nameImage: 'Loop Studios',
  work: 'Software Engineer',
  time: '1w ago',
  mode: 'Full Time',
  country: 'Worldwide',
  type: 'Fullstack',
  leve: 'Midweight',
  work1: 'Javascript',
  work2: 'Sass',
  work3: 'Ruby',
},
{
  id: '6',
  image: 'studios',
  nameImage: 'Facelt',
  work: 'Junior Backend Developer',
  time: '2w ago',
  country: 'UK only',
  type: 'Backend',
  leve: 'Junior',
  work1: 'Ruby',
  work2: 'ROR',
},
{
  id: '7',
  image: 'shortly',
  nameImage: 'Shortly',
  work: 'Junior Developer',
  time: '2w ago',
  mode: 'Full Time',
  country: 'Worldwide',
  type: 'Frontend',
  leve: 'Junior',
  work1: 'HTML',
  work2: 'Sass',
  work3: 'JavaScript',
},
]

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
