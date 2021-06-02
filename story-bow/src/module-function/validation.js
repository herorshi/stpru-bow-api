var Valid = {
    form: (formId) => {
        var count = 0
        var elements = document.getElementById(formId).querySelectorAll("[required]")

        Valid.clear(formId)

        for (var i = 0, len = elements.length; i < len; ++i) {
            if (elements[i].value !== '') continue;
            var span = document.createElement('span'),
                msg = elements[i].getAttribute('data-msg')
            if (msg == null) msg = 'กรุณาป้อนข้อมูล'
            span.className = 'invalid-feedback'
            span.id = "required-" + elements[i].name
            span.innerHTML = msg
            elements[i].classList.add("is-invalid")
            elements[i].parentElement.appendChild(span)
            count++
        }

        var results = (count > 0) ? false : true

        return results
    },

    clear: (formId = null) => {
        if (formId != null) {
            var elements = document.getElementById(formId).querySelectorAll("[required]")
            for (var s = 0, lens = elements.length; s < lens; ++s) {
                elements[s].classList.remove("is-invalid")
            }
        }

        var block = document.getElementsByClassName("invalid-feedback")
        for (var i = 0, len = block.length; i < len; i++) {
            block[0].remove()
        }
    },

    show: (name, msg) => {
        var element = document.getElementsByName(name)[0]
        if (element !== undefined) {
            var span = document.createElement('span')
            if (msg == null) msg = 'กรุณาป้อนข้อมูล'
            span.className = 'invalid-feedback'
            span.id = "required-" + name
            span.innerHTML = msg
            element.classList.add("is-invalid")
            element.parentElement.appendChild(span)
        }
    },

    phone: (name, msg) => {
        var element = document.getElementsByName(name)[0]
        if (element !== undefined && element.value !== "") {
            //clear old data
            element.classList.remove("is-invalid")
            var spanRequired = document.getElementById("required-" + name)
            if (spanRequired != null) spanRequired.remove()
            //check valid
            var phone = element.value.replace(/-/g, "")
            if (!phone.match(/^\d{10}$/)) {
                //create alert
                var span = document.createElement('span')
                if (msg == null) msg = 'รูปแบบเบอร์มือถือไม่ถูกต้อง'
                span.className = 'invalid-feedback'
                span.id = "required-" + name
                span.innerHTML = msg
                element.classList.add("is-invalid")
                element.parentElement.appendChild(span)
                return false
            }
        }
        return true
    },

    email: (name, msg) => {
        var element = document.getElementsByName(name)[0]
        if (element !== undefined && element.value !== "") {
            //clear old data
            element.classList.remove("is-invalid")
            var spanRequired = document.getElementById("required-" + name)
            if (spanRequired != null) spanRequired.remove()
            //check valid
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(element.value)) {
                //create alert
                var span = document.createElement('span')
                if (msg == null) msg = 'รูปแบบอีเมล์ไม่ถูกต้อง'
                span.className = 'invalid-feedback'
                span.id = "required-" + name
                span.innerHTML = msg
                element.classList.add("is-invalid")
                element.parentElement.appendChild(span)
                return false
            }
        }
        return true
    },

    password: (name, msg) => {
        var element = document.getElementsByName(name)[0]
        if (element !== undefined && element.value !== "") {
            //clear old data
            element.classList.remove("is-invalid")
            var spanRequired = document.getElementById("required-" + name)
            if (spanRequired != null) spanRequired.remove()
            //check valid
            if (element.value.length < 6) {
                //create alert
                var span = document.createElement('span')
                if (msg == null) msg = 'ต้องมีอย่างน้อย 6 ตัวอักษร'
                span.className = 'invalid-feedback'
                span.id = "required-" + name
                span.innerHTML = msg
                element.classList.add("is-invalid")
                element.parentElement.appendChild(span)
                return false
            }
        }
        return true
    },

    national_id: (name, msg) => {
        var element = document.getElementsByName(name)[0]
        if (element !== undefined && element.value !== "") {
            //clear old data
            element.classList.remove("is-invalid")
            var spanRequired = document.getElementById("required-" + name)
            if (spanRequired != null) spanRequired.remove()
            //check valid
            var national_id = element.value.replace(/-/g, "")
            if (!national_id.match(/^\d{13}$/)) {
                //create alert
                var span = document.createElement('span')
                if (msg == null) msg = 'รูปแบบเลขประจำตัวประชาชนไม่ถูกต้อง'
                span.className = 'invalid-feedback'
                span.id = "required-" + name
                span.innerHTML = msg
                element.classList.add("is-invalid")
                element.parentElement.appendChild(span)
                return false
            }
        }
        return true
    },


    shallowEqual(object1, object2) {
        const keys1 = Object.keys(object1)
        const keys2 = Object.keys(object2)

        if (keys1.length !== keys2.length) {
            return false
        }

        for (let key of keys1) {
            if (Array.isArray(object2[key])) {
                if (object2[key].length) {
                    return false
                }
            } else {
                if (object1[key] !== object2[key]) {
                    return false
                }
            }
        }

        return true
    }
}

module.exports = Valid
