import {
    DeleteResult, EntityRepository, getManager, Repository,
} from 'typeorm';

import { IBank, Bank } from '../../entity/bank';
import { IBankRepository } from './bankCommon';

@EntityRepository(Bank)
class BankRepository extends Repository<Bank> implements IBankRepository {
    public async createBank(bank: IBank):Promise<IBank> {
        return getManager().getRepository(Bank).save(bank);
    }

    public async getBanks():Promise<IBank[]> {
        return getManager().getRepository(Bank).find();
    }

    public async deleteBank(id: number):Promise<DeleteResult> {
        return getManager().getRepository(Bank).delete(
            { id },
        );
    }
}

export const bankRepository = new BankRepository();
