
export const getWeekDay = (date: string) => {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    date = date.slice(0,10)
    let arrDate = date.split('-')

    let d = arrDate.map((d) => {
        if(d[0] === '0'){
            return  Number(d.slice(1, d.length))
        }
        return Number(d)
    })

    let newDate = new Date(d[0],d[1]-1,d[2]);


    return days[newDate.getDay()];
}

