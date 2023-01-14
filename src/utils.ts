import { newDiaryEntry, Visibility, Weather } from "./types";



const parseComment= (commentFromRequest: any) => {
    if(typeof commentFromRequest !== 'string'){
        throw new Error('incorrecrt or missing comment')
    }

    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)){
        throw new Error('Incorrect or missing Date')
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRequest : any) : Weather => {
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error('Incorrect or missing Weather')
    }

    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any) : Visibility => {
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)){
        throw new Error('Incorrect or missing Visibility')
    }

    return visibilityFromRequest
}

const isString = (string : string) => {
    return typeof string === "string"
}

const isDate = (date: string) : boolean => {
    return Boolean(Date.parse(date))
}

const isWeather = (param : any): boolean =>{
    return Object.values(Weather).includes(param)
}

const isVisibility = (param : any) : boolean => {
    return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object:any) : newDiaryEntry =>{
    
    const newEntry: newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        
    }
    return newEntry
}


export default toNewDiaryEntry