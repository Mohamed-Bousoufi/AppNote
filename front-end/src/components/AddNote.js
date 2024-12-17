import axios from 'axios';
const AddNote = (data) => {
        axios.post(process.env.NEXT_PUBLIC_API_URL+'/notes',data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
};
export default AddNote;