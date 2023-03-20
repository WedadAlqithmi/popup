/* ------------ popup window ---------------*/

const showPopupWindow = () => {
    const popup = document.createElement("div");
    popup.classList.add('popup')
    popup.innerHTML = `
    <div class="form">
    <form class="subscriptionform">
        <div class="close"></div>
        <div>
            <p>احصل على خصم 10٪ لطلبك الأول من التطبيق</p>
        </div>
        <input name="name" type="text" placeholder="الاسم" />
        <input name="email" type="email" placeholder="بريدك الالكتروني" />
        <input name="phone number" type="text" placeholder="05xxxxxxxx" />
        <button type="submit">احصل على الخصم</button>
    </form>
</div>
    `
}

const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
window.onload = function () {
    setTimeout(function () {
        popup.style.display = "block"
        //add some time delay to show popup
    }, 2000)
}
close.addEventListener('click', () => { popup.style.display = "none" })
