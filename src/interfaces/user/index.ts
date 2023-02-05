export interface IUserRquest {
  name: string;
  email: string;
  number: string;
  password: string;
  isAdm: boolean;
}

export interface IUserResponse {
  name: string;
  email: string;
  number: string;
}

export interface IUser {
  name: string;
  email: string;
  number: string;
  password: string;
  createdAt: Date;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  number?: string;
  password?: string;
}
