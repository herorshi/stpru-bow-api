var Dataset = {
    yearList(endYear = ((new Date()).getFullYear() - 5), startYear = (new Date()).getFullYear()) {
        var yearList = []
        for (var i = startYear; i >= endYear; i--) {
            yearList.push({
                label: i,
                value: i
            })
        }
        return yearList
    },

    monthList() {
        const month = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
        var monthList = []
        month.map((item, i) => {
            return monthList.push({
                label: month[i],
                value: ((i + 1) < 10 ? "0" : "") + (i + 1)
            })
        })
        return monthList
    },

    dayList() {
        var dayList = []
        for (var i = 1; i <= 31; i++) {
            dayList.push((i < 10 ? "0" : "") + i)
        }
        return dayList
    },

    countNumber(start = 0, end = 100) {
        var dayList = []
        for (var i = start; i <= end; i++) {
            dayList.push((i < 10 ? "0" : "") + i)
        }
        return dayList
    },
}

module.exports = Dataset