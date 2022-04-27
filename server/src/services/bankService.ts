import { DeleteResult } from 'typeorm';

import { IBank } from '../entity/bank';
import { bankRepository } from '../repositories/bank/bankRepository';

class BankService {
    public async createBank(bank: IBank):Promise<IBank> {
        return bankRepository.createBank(bank);
    }

    public async banks(): Promise<IBank[]> {
        return bankRepository.getBanks();
    }

    public async deleteBank(id: number): Promise<DeleteResult> {
        return bankRepository.deleteBank(id);
    }
}

export const bankService = new BankService();
