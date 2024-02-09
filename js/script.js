/*==================================== Navigation ===================================*/

const nav = document.querySelector('.nav'),
    navList = document.querySelectorAll('li'),
    allSection = document.querySelectorAll('section'),
    totalList = navList.length,
    totalSection = allSection.length
    for( let i = 0; i < totalList; i++){
        const a = navList[i].querySelector('a');
        a.addEventListener('click', function() {
            removeBackSection();
            for(let j = 0; j < totalList; j++) {
                if(navList[j].querySelector('a').classList.contains('active')){
                    addBackSection(j)
                }
                navList[j].querySelector('a').classList.remove('active')
            }
            this.classList.add('active')
            showSection(this);
            /*==================== Auto Close Navigation Section =======================*/
            // if(window.innerWidth < 1200){
            //     asideToggelerBtn();
            // }
        })
    }
    function removeBackSection(){
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove('back-section');
        }
    }
    function addBackSection(num){
        allSection[num].classList.add('back-section');
    }
    function showSection(element){
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove('active');
        }
        const target = element.getAttribute('href').split('#')[1];
        document.querySelector(`#${target}`).classList.add('active')
    }
/*==================================== Navigation Toggler ===================================*/

const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');
    navTogglerBtn.addEventListener('click', () => {
        asideToggelerBtn()
    })
    function asideToggelerBtn(){
        aside.classList.toggle('open');
        navTogglerBtn.classList.toggle('open');
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.toggle('open');
        }
    }

/*==================================== Hire Me Button ===================================*/
function updateNav(element){
    for(let i = 0; i < totalList; i++){
        navList[i].querySelector('a').classList.remove('active')
        const target = element.getAttribute('href').split('#')[1];
        if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
            navList[i].querySelector('a').classList.add('active')
        }
    }
}
document.querySelector('.hire-me').addEventListener('click', function(){
    const sectionIndex = this.getAttribute('data-section-index')
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex)
})
