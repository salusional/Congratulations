const click=document.querySelector('.click');
const giftBox=document.querySelector('.gift-box');
const shadow=document.querySelector('.shadow');
const giftContainer=document.querySelector('.gift-container')
const text=document.querySelector('.text')
const cinnamoroll=document.querySelector('.cinnamoroll')
const paragraph=document.querySelector('.paragraph')


click.addEventListener('click',()=>{
    if(click.className==="click"){
        click.classList.add('active')
        giftBox.classList.add('active')
        shadow.classList.add('active')
        giftContainer.classList.add('active')
        text.classList.add('active')
        text.classList.remove('active2')
        cinnamoroll.classList.add('active')
        cinnamoroll.classList.remove('active2')
        paragraph.classList.add('active')
    }
    else{
        click.classList.remove('active')
        giftBox.classList.remove('active')
        shadow.classList.remove('active')
        giftContainer.classList.remove('active')
        text.classList.remove('active')
        text.classList.add('active2')
        cinnamoroll.classList.remove('active')
        cinnamoroll.classList.add('active2')
        paragraph.classList.remove('active')
    }
})