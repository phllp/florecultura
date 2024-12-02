import styles from '../styles/livros-page.module.css';
import Bookshelf from '../components/bookshelf';
import axiosInstance from '../../external/axiosInstance';
import { useEffect, useRef, useState } from 'react';
import { Categoria } from '../../core/entities/categoria';
import { Autor } from '../../core/entities/autor';
import { Livro } from '../../core/entities/livro';

const Livros = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [autores, setAutores] = useState<Autor[]>([]);

  const tituloRef = useRef('');
  const autorRef = useRef('');
  const categoriaRef = useRef('');

  const resetFilters = () => {
    tituloRef.current = '';
    autorRef.current = '';
    categoriaRef.current = '';

    fetchLivros();
  };

  // Fetch categories from the API
  const fetchCategorias = async () => {
    try {
      const response = await axiosInstance.get('/api/categorias');
      console.log('Categorias:', response.data);
      setCategorias(response.data);
    } catch (error) {
      console.error('Erro ao carregar as categorias:', error);
    }
  };

  // Fetch writers from the API
  const fetchAutores = async () => {
    try {
      const response = await axiosInstance.get('/api/autores');
      console.log('Autores:', response.data);
      setAutores(response.data);
    } catch (error) {
      console.error('Erro ao carregar os autores:', error);
    }
  };

  const fetchLivros = async () => {
    let query = '';
    if (tituloRef.current) {
      query += `titulo=${tituloRef.current}&`;
    }
    if (autorRef.current) {
      query += `autor=${autorRef.current}&`;
    }
    if (categoriaRef.current) {
      query += `categoria=${categoriaRef.current}&`;
    }
    console.log('Query:', query);
    try {
      const response = await axiosInstance.get(
        `/api/livros${query.length ? `?${query}` : ''}`
      );
      console.log('Livros:', response.data);
      setLivros(response.data);
    } catch (error) {
      console.error('Erro ao carregar os Livros:', error);
    }
  };

  useEffect(() => {
    fetchAutores();
    fetchCategorias();
    fetchLivros();

    return () => {
      setAutores([]);
      setCategorias([]);
      setLivros([]);
    };
  }, []);

  return (
    <div className="flex flex-col px-40">
      <div className="mt-10 flex w-full  ">
        <div className={`${styles.filterForm} bg-blueShadeado`}>
          <div>
            <label htmlFor="titulo">Título:</label>
            <input
              value={tituloRef.current.value}
              onChange={(e) => (tituloRef.current = e.target.value)}
              type="text"
              id="titulo"
              name="titulo"
              placeholder="Digite o título"
            />
          </div>
          <div>
            <label htmlFor="autor">Autor:</label>
            <select
              id="autor"
              name="autor"
              onChange={(e) => (autorRef.current = e.target.value)}
              value={autorRef.current.value}
            >
              <option value="">Selecione a categoria</option>
              {autores.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.nome}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="categoria">Categoria:</label>
            <select
              id="categoria"
              name="categoria"
              onChange={(e) => (categoriaRef.current = e.target.value)}
              value={categoriaRef.current.value}
            >
              <option value="">Selecione a categoria</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>
          <button onClick={fetchLivros}>Filtrar</button>
          <button onClick={resetFilters}>Limpar Filtros</button>
        </div>
      </div>

      <Bookshelf livros={livros}></Bookshelf>
    </div>
  );
};
export default Livros;
