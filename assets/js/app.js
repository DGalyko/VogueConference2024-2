const btn = () => {
    let btn = document.querySelector('.header__btn');
    let close = document.querySelector('.header__close');
    let header = document.querySelector('.header');
    let item = document.querySelectorAll('.header__item');

    btn.addEventListener('click', () => {
        header.classList.add('active');
        btn.classList.add('none');
    })
    close.addEventListener('click', () => {
        header.classList.remove('active');
        btn.classList.remove('none');
    })

    item.forEach((el) => {
        el.addEventListener('click', () => {
            header.classList.remove('active');
            btn.classList.remove('none');
        })
    })

}
btn();

const speakers = () => {
    let item = document.querySelectorAll('.speakers__item');
    item.forEach((el) => {
        el.addEventListener('click', () => {
            el.classList.toggle('active');
        })
    })
}
speakers();