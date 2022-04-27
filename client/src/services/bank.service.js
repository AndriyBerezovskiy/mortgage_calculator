import axiosService from './axios.service';
import { urls } from '../config/urls';

export const bankService = {
    create: (bank) => axiosService.post(urls.banks, bank).then((value) => value.data),
    getAll: () => axiosService.get(urls.banks).then((value) => value.data),
    updateById: (id, bank) => axiosService.patch(`${urls.banks}/${id}`, bank).then((value) => value.data),
    deleteById: (id) => axiosService.delete(`${urls.banks}/${id}`),
};
