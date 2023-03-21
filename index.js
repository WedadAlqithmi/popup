const submitSubscriptionForm = () => {
    const pop_up = document.createElement("div");
    pop_up.classList.add('popup')
    pop_up.innerHTML = `<div class="popup">
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
    </div>`
    popup.appendChild(pop_up);


    const popupwindow = document.querySelector('.popup'); if (popupwindow) {
        popupwindow.after(form)
    }

    const close = document.querySelector('.close');

    const form_input = document.getElementById('.form-input')
    const form_btn = document.querySelector('.popup .form button')
    const form_msg = document.getElementById('form-msg')

    form_input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendForm()
        }
    });

    form_btn.onclick = function () {
        sendForm()
    }

    window.onload = function () {
        setTimeout(function () {
            popup.style.display = "block"
            //add some time delay to show popup
        }, 2000)
    }

    const sendForm = () => {
        var value = form_input.value;
        console.log("Input value: " + value);
        form_msg.innerText = `تم الإرسال`
        setTimeout(() => {
            form_msg.innerText = ``
            form_input.value = ``
        }, 3000);
    }
}

close.addEventListener('click', () => { popup.style.display = "none" })
