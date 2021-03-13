export const transactionReducer = (state, action) => {

    var list = JSON.parse(localStorage.getItem('transactions'))

    switch (action.type) {
        case "INSERT":
            list.push(action.payload)
            localStorage.setItem('transactions', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case "UPDATE":
            list[state.currentIndex] = action.payload
            localStorage.setItem('transactions', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case "DELETE":
            list.splice(action.payload, 1)
            localStorage.setItem('transactions', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case "UPDATEINDEX":
            return { list, currentIndex: action.payload }

        case "SEARCH":
            var list_search = []
            list.map(item => {
                if (item.notetitle.indexOf(action.payload) !== -1) {
                    list_search.push(item);
                }
            });
            localStorage.setItem('transactions', JSON.stringify(list_search))
            return { list, currentIndex: -1 }

        default:
            return state
    }

}