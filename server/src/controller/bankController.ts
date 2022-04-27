import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';

import { IBank } from '../entity/bank';
import { bankService } from '../services/bankService';

class BankController {
    public async createBank(req:Request, res:Response): Promise<Response<IBank>> {
        const createdBank = await bankService.createBank(req.body);
        return res.json(createdBank);
    }

    public async getBank(req:Request, res:Response): Promise<Response<IBank[]>> {
        const banks = await bankService.banks();
        return res.json(banks);
    }

    public async deleteBank(req:Request, res:Response): Promise<Response<DeleteResult>> {
        const deletedBank = await bankService.deleteBank(Number(req.params.id));
        return res.json(deletedBank);
    }
}

export const bankController = new BankController();
