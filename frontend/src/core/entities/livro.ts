export type Livro = {
  id: number;
  titulo: string;
  descricao: string;
  autor: { id: number; nome?: string };
  categoria: { id: number; nome?: string };
  urlCapa: string;
};
