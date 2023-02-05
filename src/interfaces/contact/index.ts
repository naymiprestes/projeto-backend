export interface IContactRquest {
  name: string;
  email: string;
  number: string;
}

export interface IContactResponse {
  name: string;
  email: string;
  number: string;
}

export interface IContact {
  name: string;
  email: string;
  number: string;
  createdAt: Date;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  number?: string;
}
