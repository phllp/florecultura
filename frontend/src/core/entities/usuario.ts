export enum UserRoles {
  ADMIN = 'ADMIN',
  LEITOR = 'LEITOR',
}

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senha?: string;
  role: UserRoles;
};
