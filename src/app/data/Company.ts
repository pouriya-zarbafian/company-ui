import { Owner } from './Owner';

export class Company {
    id: number;
    name: string;
    address: string;
    city: string;
    country: string;
    email: string;
    phoneNumber: string;
    owners: Owner[];
}
