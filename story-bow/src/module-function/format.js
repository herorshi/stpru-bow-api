var Format = {
    price(number, decimal = 0) {
        number = (number !== undefined && number !== "" && number !== null) ? number : 0
        number = Intl.NumberFormat('en-US', { currency: 'USD', minimumFractionDigits: parseInt(decimal), maximumFractionDigits: parseInt(decimal), }).format(parseFloat(number))
        return number
    },

    dateSplit(dateTime) {
        dateTime = dateTime.split(" ")
        var date = dateTime[0].split("/")
        var time = dateTime[1].split(":")
        return {
            day: date[0],
            month: date[1],
            year: date[2],
            hour: time[0],
            minute: time[1],
            second: time[2],
        }
    },

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        }
        reader.onerror = function (error) {
            console.log('Error: ', error);
        }
    },

    formatDateTime(dateTime, type = 'asc') {
        dateTime = dateTime.split(" ")
        var time = dateTime[1]
        if (type === "asc") {
            var date1 = dateTime[0].split("/")
            return date1[2] + "-" + date1[1] + "-" + date1[0] + " " + time
        } else {
            var date2 = dateTime[0].split("-")
            return date2[2] + "/" + date2[1] + "/" + date2[0] + " " + time
        }
    },
}

module.exports = Format