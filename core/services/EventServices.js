import { ONGOING_EVENT } from '../globals/constants';
import apiService from './apiService';

const EventServices = {
  getEvents: async ({
    page = 1, search = '', page_size = 10, type = ONGOING_EVENT,
  }) => {
    const RES = apiService.get(`/event-list?page=${page}&search=${search}&page_size=${page_size}&type=${type}`);
    console.log(RES, 'events');
    return RES;
  },
};

export default EventServices;
