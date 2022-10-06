document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main')
  const mainContainer = document.body.querySelector('main .container')
  mainContainer.style.display = 'none'

  const loading = document.createElement('div')
  loading.innerText = 'Loading ...'
  loading.style.width = '100vw'
  loading.style.height = '100vh'
  loading.style.display = 'flex'
  loading.style.justifyContent = 'center'
  loading.style.alignItems = 'center'
  loading.style.fontSize = '1.5rem'
  loading.style.fontFamily = 'sans-serif'
  loading.style.color = 'white'

  main.style.overflow = 'hidden'
  main.appendChild(loading)

  const maincss = document.createElement('link')
  const aoscss = document.createElement('link')
  const aosjs = document.createElement('script')
  const tailwindcss = document.createElement('script')
  const iconify = document.createElement('script')

  maincss.rel = 'stylesheet'
  maincss.href = '/files/f50385c9e040f00025d65ac80473346b/main.css'
  aoscss.rel = 'stylesheet'
  aoscss.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css'
  aosjs.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js'
  tailwindcss.src = 'https://unpkg.com/tailwindcss-jit-cdn'
  iconify.src = 'https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js'

  document.head.appendChild(aoscss)
  document.head.appendChild(maincss)
  document.head.appendChild(aosjs)
  document.head.appendChild(tailwindcss)
  document.head.appendChild(iconify)
  
  setTimeout(() => {
    let isError = false
    
    try {
      AOS.init()
    } catch (e) {
      isError = true
      loading.innerText = 'Error, try to refresh page!'
    }
    
    const content = `
<div class="content-container">
<div class="hero grid grid-cols-1 lg:grid-cols-2 px-8 pt-28 lg:pl-16 lg:pt-16 overflow-hidden" style="background-image: url(&quot;/files/6f0404a54f448b01ab47d71cb18f8bcd/grid-hero-bg.png&quot;);">
  <div data-aos="fade-up" data-aos-duration="600" class="font-space-mono flex items-center text-white text-[2rem] md:text-[3.4rem] text-center lg:text-left aos-init aos-animate">
    Let's Show Up Your Cyber Security Skill
  </div>
  <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" class="flex items-center aos-init aos-animate">
    <div>
      <img class="w-full h-full transform scale-[1.2]" src="/files/3182730708a1a7aa83862cd0fb19ab1c/hero-image.webp">
    </div>
  </div>
</div>
</div>
<div class="content-container">
<div class="mx-4 lg:mx-48 mt-40">
  <div data-aos="fade-up" data-aos-duration="600" class="text-center font-space-mono font-bold text-[1.5rem] md:text-[2rem] text-white mb-12 aos-init aos-animate">
    FOSTIFEST <span class="gradient-text">2.0</span>
  </div>
  <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" class="text-center font-montserrat text-[0.8rem] md:text-[1.1rem] text-white aos-init aos-animate">
    Event tahunan dari Forum Open Source Teknik Informatika (FOSTI) Universitas Muhammadiyah Surakarta, kini kami hadir menjawab tantangan untuk memfasilitasi serta menyalurkan kemampuan masyarakat Indonesia di bidang keamanan siber.
  </p>
</div>
</div>
<div data-aos="fade-up" data-aos-duration="600" data-aos-delay="400" class="content-container mt-10 mb-10 flex justify-center aos-init aos-animate">
<div class="gradient-rectangle"></div>
</div>
<div class="content-container">
<div class="mx-2 lg:mx-48">
  <div data-aos="fade-up" data-aos-duration="600" class="text-center font-space-mono font-bold text-[1.5rem] md:text-[2rem] text-white mb-20 aos-init aos-animate">
    GET <span class="gradient-text">READY!</span> <br>
    VARIOUS CHALLENGES WAITING FOR YOU
  </div>
  <div class="flex flex-wrap gap-8 justify-evenly mb-16">
    <div data-aos="flip-left" data-aos-duration="600" class="w-fit flex flex-col justify-center items-center aos-init">
      <div class="mb-4 w-[6rem] md:w-[9rem]">
        <img src="/files/6a3b5ef765019292dfcc3213c96eaa69/cryptography.png">
      </div>
      <div class="text-white font-space-mono text-center text-base md:text-2xl">
        Cryptography
      </div>
    </div>
    <div data-aos="flip-left" data-aos-duration="600" data-aos-delay="100" class="w-fit flex flex-col justify-center items-center aos-init">
      <div class="mb-4 w-[6rem] md:w-[9rem]">
        <img src="/files/f831205343d577fda6b4890fd459bc72/forensic.png">
      </div>
      <div class="text-white font-space-mono text-center text-base md:text-2xl">
        Forensic
      </div>
    </div>
    <div data-aos="flip-left" data-aos-duration="600" data-aos-delay="200" class="w-fit flex flex-col justify-center items-center aos-init">
      <div class="mb-4 w-[6rem] md:w-[9rem]">
        <img src="/files/f831205343d577fda6b4890fd459bc72/forensic.png">
      </div>
      <div class="text-white font-space-mono text-center text-base md:text-2xl">
        Web Hacking
      </div>
    </div>
  </div>
  <div class="flex flex-wrap gap-8 justify-evenly">
    <div data-aos="flip-left" data-aos-duration="600" data-aos-delay="300" class="w-fit flex flex-col justify-center items-center aos-init">
      <div class="mb-4 w-[6rem] md:w-[8.5rem]">
        <img src="/files/6c32d500d7bf8b08214dab113787885e/reverse-engineering.png">
      </div>
      <div class="text-white font-space-mono text-center text-base md:text-2xl">
        Reverse Engineering
      </div>
    </div>
    <div data-aos="flip-left" data-aos-duration="600" data-aos-delay="400" class="w-fit flex flex-col justify-center items-center aos-init">
      <div class="mb-4 w-[6rem] md:w-[9rem]">
        <img src="/files/e3fbf84b19e81442b94a7440c347534a/binary-exploitation.png">
      </div>
      <div class="text-white font-space-mono text-center text-base md:text-2xl">
        Binary Exploitation
      </div>
    </div>
  </div>
</div>
</div>
<div class="content-container">
<div data-aos="fade-up" data-aos-duration="600" class="mt-14 mb-10 flex justify-center aos-init">
  <div class="gradient-rectangle"></div>
</div>
</div>
<div class="content-container">
<div class="mx-4">
  <div data-aos="fade-down" data-aos-duration="600" class="text-center font-space-mono font-bold text-[1.5rem] md:text-[2rem] text-white mb-12 aos-init">
    SUPPORTED <span class="gradient-text">BY</span> <br>
  </div>
  <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" class="card-sponsor flex flex-col gap-6 items-center justify-center py-20 px-10 rounded-[1.5rem] aos-init">
    <div>
      <img src="/files/278d7564e3e1d1b4123ab76abd36e850/dicoding-logo.png">
    </div>
    <div class="transform scale-[1.05]">
      <img src="/files/6867280fd7ea753a32b47c3fcdf495e9/idcloudhost-logo.png">
    </div>
  </div>
</div>
</div>`
    
    if (!isError) {
      const parser = new DOMParser();
      const parsedHTML = parser.parseFromString(content, "text/html");

      const heroContent = parsedHTML.querySelector('.hero')
      heroContent.style.backgroundImage = "url('/files/6f0404a54f448b01ab47d71cb18f8bcd/grid-hero-bg.png')"

      mainContainer.innerHTML += parsedHTML.body.innerHTML
      main.removeChild(loading)
      AOS.refresh()
      mainContainer.style.display = 'block'
      setTimeout(() => {
        AOS.refresh()
      }, 100)
    }
  }, 1000)
})
