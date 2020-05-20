import axios from 'axios';


export const getAllReservations = (token) =>{
    return (dispatch) => {

        axios.get('https://laravel-react-api.xyz/api/reservations?token=' + token)
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