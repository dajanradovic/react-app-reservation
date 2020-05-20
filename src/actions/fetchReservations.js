import axios from 'axios';


export const getAllReservations = (token) =>{
    return (dispatch) => {

        axios.get('http://104.248.90.148:8080/api/reservations?token=' + token)
            .then(response => {
                    console.log('bla bla');

                  // console.log(response.data.data);
                   dispatch({
                    type: 'RESERVATION_LIST',
                    reservations: response.data.data
                })
              
            })
            
            .catch(error => {
                console.log(error);
             
            });

        
    }

}