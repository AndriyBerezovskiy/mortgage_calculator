import {
    Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

import { CommonFields } from './commonFields';

export interface IBank {
	bankName: string;
	interestRate: number;
	maximumLoan: number;
	minimumDownPayment: number;
	loanTerm: number;
}

@Entity('Banks', { database: 'bank' })
export class Bank extends CommonFields {
	@PrimaryGeneratedColumn()
	    id: number;

	@Column({
	    type: 'varchar',
	    width: 250,
	    nullable: false,
	    unique: true,
	})
	    bankName: string;

	@Column({
	    type: 'int',
	    nullable: false,
	})
	    interestRate: number;

	@Column({
	    type: 'int',
	    nullable: false,
	})
	    maximumLoan: number;

	@Column({
	    type: 'int',
	    nullable: false,
	})
	    minimumDownPayment: number;

	@Column({
	    type: 'int',
	    nullable: false,
	})
	    loanTerm: number;
}
