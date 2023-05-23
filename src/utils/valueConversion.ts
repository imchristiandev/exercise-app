export const valueToString = (value:any) => ((typeof(value) === "object") ? JSON.stringify(value) : String(value))

export const valueTransform = (value:string) => {
    try {        
        return JSON.parse(value)
    }
    catch { 
        return value
    }
}