export const Insert = data => {
    return {
        type: "INSERT",
        payload: data
    }
}

export const Update = data => {
    return {
        type: "UPDATE",
        payload: data
    }
}

export const Delete = index => {
    return {
        type: "DELETE",
        payload: index
    }
}

export const UpdateIndex = index => {
    return {
        type: "UPDATEINDEX",
        payload: index
    }
}

export const Seaarch = key => {
    return {
        type: "SEARCH",
        payload: key
    }
}