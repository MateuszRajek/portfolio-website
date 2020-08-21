const sliders = document.querySelectorAll('.glide');
const config = {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    breakpoints: {
        1400: {
            perView: 2,
        },
        768: {
            perView: 1,
        }
    },
    focusAt: 'center',
    gap: 30,
}

sliders.forEach(slider => {
    new Glide(slider, config).mount()
})