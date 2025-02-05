let heroSection = document.createElement("section")
heroSection.classList.add("hero");



heroSection.innerHTML = `
    <img src="${data.hero.image}" alt="" class="hero__img">
    <div class="hero__content grid">
        <div class="hero__title">
           <div class="hero__title--img">
            <img src="img/tulip__logo.png" alt="">
           </div>
        </div>
       
        <h1 class="hero__headline-a">${data.hero.headlineA}</h1>
        <h2 class="hero__headline-b">${data.hero.headlineB}</h2>
        <a href="#" class="hero__button">Book Now</a>
    </div>
`
main.append(heroSection);