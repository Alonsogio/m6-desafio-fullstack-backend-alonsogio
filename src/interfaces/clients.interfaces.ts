export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClientRequest {
  fullName: string;
  email: string;
  password: string;
  contact: string;
  createdAt?: Date;
}
export interface IClientResponse {
  fullName: string;
  email: string;
  contact: string;
  createdAt?: Date;
}

export interface IClientUpdate {
  fullName?: string;
  email?: string;
  contact?: string;
  password?: string;
  createdAt?: Date;
  id?: string;
}

export interface IClientUpdateResponse {
  fullName?: string;
  email?: string;
  contact?: string;
  createdAt?: Date;
}
