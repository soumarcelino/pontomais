
import moment from 'moment'

const getWorkedTime = (workDay, inMoment = false ) => {
    let milliseconds = 0
    for (let i = 0; i < workDay.length; i++) {
        milliseconds += moment.duration(moment(workDay[i+1].time,"HH:mm").diff(moment(workDay[i].time,"HH:mm"))).valueOf()
        i++
    }
    const momentMs = moment.duration(milliseconds)
    if ( inMoment ) return momentMs
    return `${momentMs.hours()} horas e ${momentMs.minutes()} minutos`
}

const getTimeLeft = ( workDay, inMoment = false ) => {
    const workedTime = getWorkedTime( workDay, true )
    const timeLeft = moment.duration(moment(`${workedTime.hours()}:${workedTime.minutes()}`,"HH:mm").diff(moment('08:00',"HH:mm")))
    if ( inMoment ) return timeLeft
    return `${Math.abs(timeLeft.hours())} horas e ${Math.abs(timeLeft.minutes())} minutos`
}

const getStatus = ( workDay ) => {
    const timeLeft = getTimeLeft( workDay, true )
    if( moment(timeLeft)._i._milliseconds > 0 ) return { overtime : true }
    return { overtime: false }
}

export default {
    getWorkedTime,
    getTimeLeft,
    getStatus
}