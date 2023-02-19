const mainContainer = document.querySelector('.main-container');
const ratingsSectin = mainContainer.querySelector('.ratings-sectino');
const ratingBUttons = ratingsSectin.querySelectorAll('.rating-btns li')
const thankYouContainer = mainContainer.querySelector('.thank-you-container');
const submitBtn = ratingsSectin.querySelector('.submit-btn');
const showScore = thankYouContainer.querySelector('.score')
let selectedRating = ''

submitBtn.addEventListener('click', function () {
    showScore.innerText = selectedRating
    ratingsSectin.style.display = 'none'
    thankYouContainer.style.display = 'flex'
}) 

ratingBUttons.forEach(rating => {
    rating.addEventListener('click', function(){
        const rating = this.querySelector('input').value
        removeActiveBtn()
        this.classList.add('active-btn')
        selectedRating = rating

    })
})

function removeActiveBtn(){
    const activeBtn = document.querySelector('.active-btn')
    if(activeBtn) activeBtn.classList.remove('active-btn')
}