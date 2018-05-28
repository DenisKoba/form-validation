export default {
    /* eslint-disable */
    data: function () {
        return {}
    },
    computed: {
        years() {
            let start = (new Date).getFullYear() - 18
            let list = []
            for (let i = start - 80; i <= start; i++) {
                list.push(i)
            }
            return list
        },
        days() {
            let day = 31
            let daysList = []
            for (let i = day - 30; i <= day; i++) {
                daysList.push(i)
            }
            return daysList
        }
    },
    methods: {
        validate() {
            let day = document.querySelector("#day");
            let month = document.querySelector("#month");
            let year = document.querySelector("#year");
            let terms = document.querySelector("#terms-agree");
            let name = document.querySelector("#name");
            let email = document.querySelector("#email");
            let password = document.querySelector("#password");
            let nameformat = /^[^а-яА-ЯёЁ0-9@#$%&*<>\:\;\,\~\+\=\(\)\!\^\'\"\\\/]+$/
            let mailformat = /^(([^а-яА-Яыъ<>()[\]\\.,;:\s@\"]+(\.[^а-яА-Яыъ<>()[\]\\.,;:\s@\"]+)*)|(\"[a-zA-Z\-0-9]+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!name.value) {
                document.querySelector('.name-error').style.display = "block"
                document.querySelector('.name-error').innerHTML = "Please, enter your name"
            } else if ((!name.value.match(nameformat))) {
                document.querySelector('.name-error').style.display = "block"
                document.querySelector('.name-error').innerHTML = "Only letters (A - Z, a - z) are allowed"
            }
            if (!email.value) {
                document.querySelector('.email-error').style.display = "block"
            }
            if (password.value.length <= 7) {
                document.querySelector('.password-error').style.display = "block"
            }
            if (terms.checked === false) {
                document.querySelector('.terms-error').style.display = "block"
                document.querySelector('.terms-error').innerHTML = "Please accept our Terms and Privacy Policy."
            }
            if (day.value === ' ') {
                document.querySelector('.age-error').style.display = "block"
                document.querySelector('.age-error').innerHTML = "Please choose a day"
            } else if (month.value === ' ') {
                document.querySelector('.age-error').style.display = "block"
                document.querySelector('.age-error').innerHTML = "Please choose a month"
            } else if (year.value === ' ') {
                document.querySelector('.age-error').style.display = "block"
                document.querySelector('.age-error').innerHTML = "Please choose a year"
            }
        },
        resetError() {
            let errors = document.querySelectorAll('.js-error')
            errors.forEach(function (value) {
                value.style.display = 'none'
            })
        }
    }
}