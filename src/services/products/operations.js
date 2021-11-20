import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { items } from './actions';

toast.configure();

export const getProducts = () => (dispatch) => {
  dispatch(items.get.request());

  const options = {
    method: 'GET',
    url: 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e',
  };
  axios(options)
    .then((res) => {
      dispatch(items.get.success(res));
    })
    .catch((err) => {
      dispatch(items.get.error(err));
      toast.error(err.message);
    });
};
