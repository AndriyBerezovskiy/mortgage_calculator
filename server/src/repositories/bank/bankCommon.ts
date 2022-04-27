import { DeleteResult } from 'typeorm';

import { IBank } from '../../entity/bank';

export interface IBankRepository {
	createBank(bank: IBank):Promise<IBank>;
	getBanks():Promise<IBank[]>;
	deleteBank(id: number):Promise<DeleteResult>;
}
