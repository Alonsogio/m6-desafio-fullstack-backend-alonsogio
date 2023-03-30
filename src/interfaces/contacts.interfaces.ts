export interface IContactRequest {
  fullName: string;
  email: string;
  contact: string;
}
export interface IContactResponse {
  fullName: string;
  email: string;
  contact: string;
  createdAt?: Date;
  client?: string;
}
