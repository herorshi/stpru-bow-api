var Alert = {
    showMsg(msg = "", style = "success", timeOut = 3000) {
        //Create and show alert
        var div = document.createElement('div')
        div.id = "alertShowMsg";
        div.className = `alert alert-${style} alert-dismissible fade show`
        div.style.position = "fixed"
        div.style.top = "20px"
        div.style.zIndex = "1060"
        div.style.left = "50%"
        div.style.transform = "translate(-50%)"
        div.style.minWidth = (window.screen.availWidth < 576) ? "90%" : "600px"
        div.style.opacity = 1
        div.innerHTML = `${msg}<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`
        document.body.appendChild(div)

        //Timeout remove and animation
        setTimeout(function () {
            var fadeOut = setInterval(function () {
                if (div.style.opacity > 0) {
                    div.style.opacity -= 0.1
                } else {
                    if (document.getElementById('alertShowMsg') != null) {
                        div.parentNode.removeChild(div)
                    }
                    clearInterval(fadeOut)
                }
            }, 100)
        }, timeOut)
    },

    loadingScreen(title = "กำลังส่งข้อมูล", description = "กรุณารอสักครู่") {
        var loadingScreen = document.getElementById(`loadingScreen`)
        if (loadingScreen !== null) {
            // document.body.classList.remove(`overflow-hidden`)
            loadingScreen.classList.remove(`show`)
            var backdrops = document.getElementById(`modal-backdrop`)
            backdrops.classList.remove(`show`)
            document.body.classList.remove(`modal-open`)
            setTimeout(() => {
                loadingScreen.parentNode.removeChild(loadingScreen)
                backdrops.parentNode.removeChild(backdrops)
            }, 300)
        } else {
            // document.body.className = "overflow-hidden"
            var div = document.createElement('div')
            div.id = "loadingScreen"
            div.classList = "modal fade"
            div.innerHTML = `<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header">
                            <h5 class="modal-title">${title}</h5></div><div class="modal-body text-center py-5">
                            <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;border-width:5px;">
                            <span class="sr-only">Loading...</span></div><p class="mb-0 mt-3 text-muted">${description}</p></div></div></div>`
            document.body.appendChild(div)
            document.body.className = "modal-open"
            var backdrop = document.createElement("div")
            backdrop.id = "modal-backdrop"
            backdrop.className = "modal-backdrop fade"
            document.body.appendChild(backdrop)
            document.getElementById("loadingScreen").classList.add("d-block")
            setTimeout(() => {
                document.getElementById("loadingScreen").classList.add("show")
                backdrop.classList.add("show")
            }, 200)
        }
    },
}

module.exports = Alert