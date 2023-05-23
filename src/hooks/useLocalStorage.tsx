import { useState } from "react"

import { valueToString, valueTransform } from "../utils/valueConversion";

export const useLocalStorage = (localStorageItemName: string, initialValue: any ) => {
    const [localStorageInfo, setLocalStorageInfo] = useState(initialValue);
    const localStorageValue: string | null = localStorage.getItem(localStorageItemName)
    if (localStorageValue) {
        const convertedLocalStorage = valueTransform(localStorageValue)
        setLocalStorageInfo(convertedLocalStorage)
    } else {
        const localStorageValue:string = valueToString(initialValue)
        localStorage.setItem(localStorageItemName, localStorageValue)
        setLocalStorageInfo(initialValue)
    }

    const saveLocalStorageInfo = (newItem:any) => {
        localStorage.setItem(localStorageItemName, valueToString(newItem))
    }

    return [localStorageInfo, saveLocalStorageInfo]
}