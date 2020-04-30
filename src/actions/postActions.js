export const deletePost = (arrival, leave, nights, between) =>{

        return{
            type: 'DELETE_POST',
            
        }

}

export const setReservationDates = (payload) =>{

    return{
        type: 'SET_RESERVATION_DATES',
        payload
    }
}

export const reservationAddedSlack = () =>{

        return{
            type: 'RESERVATION_ADDED_SLACK',
            
        }
    }

export const reservationAddedSlackReset = () =>{

        return{
            type: 'RESERVATION_ADDED_SLACK_RESET',
            
        }
    }

export const openModal = () =>{

        return{
            type: 'OPEN_MODAL',
            
        }
    }

export const closeModal = () =>{

        return{
            type: 'CLOSE_MODAL',
            
        }
    }

export const addNewFacilityToList = (payload) =>{

        return{
            type: 'ADD_NEW_FACILITY_TO_LIST',
            payload
        }
    }

export const addToken = (payload) =>{

        return{
            type: 'ADD_TOKEN',
            payload
        }
    }