import "./home.css";
import livro1 from "../../assets/livro-1.jpg";
import livro2 from "../../assets/livro-2.webp";
import livro3 from "../../assets/livro-3.jpg";
import Bookshelf from "../components/bookshelf";
// import livro4 from "../../assets/livro-4.png";
// import livro5 from "../../assets/livro-5.png";
// import livro6 from "../../assets/livro-6.png";
// import livro7 from "../../assets/livro-7.png";
// import livro8 from "../../assets/livro-8.png";
// import livro9 from "../../assets/livro-9.png";
// import livro10 from "../../assets/livro-10.png";

const Home = () => {
  return (
    <>
      <div className="hero">
        <h1>Bem-vindo à Flor & Cultura</h1>
        <p>Explore um mundo de conhecimento e descoberta.</p>
      </div>

      <main className="home-main">
        <section>
          <h2>Livros em Destaque</h2>
          <div className="book">
            <div className="book-item">
              <img src={livro1} alt="Livro 1" />
              <div className="book-info">
                <h3>Sobre os Ossos dos Mortos</h3>
                <p>Olga Tokarczuk</p>
              </div>
            </div>
            <div className="book-item">
              <img src={livro2} alt="Livro 2" />
              <div className="book-info">
                <h3>Frankenstein</h3>
                <p>Mary Shelley</p>
              </div>
            </div>
            <div className="book-item">
              <img src={livro3} alt="Livro 3" />
              <div className="book-info">
                <h3>Saboroso Cadáver</h3>
                <p>Augustina Bazterrica</p>
              </div>
            </div>
          </div>
          <section>
            <h2>Próximos Eventos</h2>
            <p>
              Fique atento aos próximos eventos e workshops em nossa biblioteca!
            </p>
            <ul>
              <li>Workshop de Escrita Criativa - 10 de Outubro</li>
              <li>Clube do Livro - 15 de Outubro</li>
              <li>Palestra sobre História da Literatura - 20 de Outubro</li>
            </ul>
          </section>
        </section>
      </main>

      <div className="container">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title title-primary">Bem-Vindo!</h2>
            <p className="description description-primary">
              Faça login com suas informações
            </p>
            <button id="entrar" className="btn btn-primary">
              Entrar
            </button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">Criar Conta</h2>
            <form className="form">
              <label className="label-input" htmlFor="">
                <input type="text" placeholder="Name" />
              </label>

              <label className="label-input" htmlFor="">
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input" htmlFor="">
                <input type="password" placeholder="Password" />
              </label>

              <label className="role">Escolha o perfil:</label>
              <select id="role" name="role" required>
                <option value="leitor">Leitor</option>
                <option value="administrador">Administrador</option>
                <option value="bibliotecario">Bibliotecário</option>
              </select>

              <button className="btn btn-second">Cadastrar</button>
            </form>
          </div>
        </div>
        <div className="content second-content">
          <div className="first-column">
            <h2 className="title title-primary">Olá, Usuário!</h2>
            <button id="cadastrar" className="btn btn-primary">
              Entrar
            </button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">Login</h2>
            <form className="form">
              <label className="label-input" htmlFor="">
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input" htmlFor="">
                <input type="password" placeholder="Password" />
              </label>

              <a className="password" href="#">
                Esqueceu sua senha?
              </a>
              <button className="btn btn-second">Entrar</button>
            </form>
          </div>
        </div>
      </div>

      <div className="sidebar mt-10">
        <nav className="menu">
          <a href="#" className="menu-item">
            Todos os Livros
          </a>
          <a href="#" className="menu-item">
            Meus Livros
          </a>
        </nav>
        <form className="filter-form">
          <label htmlFor="title">Título:</label>
          <input type="text" id="title" placeholder="Digite o título" />

          <label htmlFor="author">Autor:</label>
          <input type="text" id="author" placeholder="Digite o autor" />

          <label htmlFor="category">Categoria:</label>
          <select id="category">
            <option value="">Selecione a categoria</option>
            <option value="ficcao">Ficção</option>
            <option value="biografia">Biografia</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="autoajuda">Autoajuda</option>
            <option value="terror">Terror</option>
            <option value="romance">Romance</option>
            <option value="ficção">Ficção</option>
            <option value="suspense">Suspense</option>
            <option value="anatomia">Anatomia</option>
          </select>
          <button type="submit">Filtrar</button>
        </form>
      </div>

      <main className="home-main">
        <Bookshelf />
        <div className="book-details-container hidden">
          <div className="book-details">
            <button className="close-button">X</button>
            <h1 className="book-title"></h1>
            <p className="book-author"></p>
            <img src="" alt="" className="book-cover" />
            <p className="book-genre"></p>
            <p className="book-description"></p>
            <a href="#" className="back-button">
              ← Voltar para a Estante
            </a>
            <button className="add-cart-btn">
              <i className="bi bi-arrow-down"></i>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
