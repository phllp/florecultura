import "./bookshelf.css";
import livro1 from "../../assets/livro-1.jpg";
import livro2 from "../../assets/livro-2.webp";
import livro3 from "../../assets/livro-3.jpg";
import livro4 from "../../assets/livro-4.png";
import livro5 from "../../assets/livro-5.png";
import livro6 from "../../assets/livro-6.png";
import livro7 from "../../assets/livro-7.png";
import livro8 from "../../assets/livro-8.png";
import livro9 from "../../assets/livro-9.png";
import livro10 from "../../assets/livro-10.png";

const Bookshelf = () => {
  return (
    <section className="book-shelf">
      <h1>Estante de Livros</h1>
      <div className="book-items">
        <div
          className="book-card"
          data-title="Sobre os Ossos dos Mortos"
          data-author="Olga Tokarczuk"
          data-genre="Romance, Mistério"
          data-description="Subversivo, macabro e discutindo temas como mundo natural e civilização, este livro parte de uma história de crime e investigação convencional para se converter numa espécie de suspense existencial.
  “Uma das grandes vozes humanistas da Europa”, segundo o jornal The Guardian, Olga Tokarczuk oferece um romance instigante sobre temas como loucura, injustiça e direitos dos animais."
          data-cover="livro 1.jpg"
        >
          <img src={livro1} alt="Capa do livro Sobre os Ossos dos Mortos" />
          <p>Sobre os Ossos dos Mortos</p>
        </div>

        <div
          className="book-card"
          data-title="Frankenstein"
          data-author="Mary Shelley"
          data-genre="Terror, Ficção Científica"
          data-description="O CLÁSSICO ESTÁ VIVO!No aniversário de duzentos anos de sua criação, FRANKENSTEIN volta a caminhar entre nós, numa edição monstruosa como só a DarkSide® Books poderia lançar. A obra-prima de Mary Shelley merece. Seu livro de estreia é um marco do romance gótico, verdadeiro ícone do terror e influência fundamental para o surgimento da ficção científica.
  A criatura de Frankenstein é considerada o primeiro mito dos tempos modernos.Para compor sua bem-sucedida experiência literária, Shelley costurou influências diversas, que vão do livro do Gênesis a Paraíso Perdido, da Grécia Antiga ao Iluminismo."
          data-cover="livro 2.webp"
        >
          <img src={livro2} alt="Capa do livro Frankenstein" />
          <p>Frankenstein</p>
        </div>
        <div
          className="book-card"
          data-title="Saboroso Cadáver"
          data-author="Augustina Bazterrica"
          data-genre="terror, Mistério"
          data-description=" Diz o antigo ditado que “Você é o que você come”. No romance Saboroso Cadáver, de Agustina Bazterrica, esse ditado é levado às últimas consequências. O livro conta a história de um vírus que se espalha entre os animais de todo o planeta e torna sua carne mortal aos humanos.
Impossibilitados de utilizar os animais para a alimentação, a sociedade regulariza a criação e a reprodução de seres humanos como animais de abate, transformando o mundo num lugar cinzento, cínico e inóspito. Nesse romance visceral, grotesco, repleto de descrições vívidas e nauseantes capaz de nos alimentar na medida certa,
vamos acompanhar a rotina de Marcos Tejo, funcionário do frigorífico Krieg,, que recebe de presente uma mulher viva, considerada “carne de primeira”. Ironicamente, esse funcionário parece ser o mais humano nesse mundo terrível. Seguindo seus passos, presenciamos o processo metódico da criação de pessoas, abates, experimentos de laboratório, caçadas humanas e suntuosos jantares canibais.
Publicado originalmente em 2017, Saboroso Cadáver ganhou o Prêmio Clarín Novela naquele mesmo ano, na Argentina"
          data-cover="livro 3.jpg"
        >
          <img src={livro3} alt="Capa do livro " />
          <p>Saboroso Cadáver</p>
        </div>

        <div
          className="book-card"
          data-title="Frankenstein"
          data-author="Mary Shelley"
          data-genre="Terror, Ficção Científica"
          data-description="Um clássico da literatura gótica e ficção científica, Frankenstein explora os limites da ciência e as consequências da criação artificial da vida. Escrito por Mary Shelley, este romance desafia as noções de humanidade e ética."
          data-cover="livro 4.png"
        >
          <img src={livro4} alt="Capa do livro " />
          <p>Frankenstein</p>
        </div>

        <div
          className="book-card"
          data-title="1984"
          data-author="George Orwell"
          data-genre="ficção"
          data-description="Winston, herói de 1984 , último romance de George Orwell, vive aprisionado na engrenagem totalitária de uma sociedade completamente dominada pelo Estado, onde tudo é feito coletivamente, mas cada qual vive sozinho. Ninguém escapa à vigilância do Grande Irmão, a mais famosa personificação literária de um poder cínico e cruel ao infinito,
além de vazio de sentido histórico. De fato, a ideologia do Partido dominante em Oceânia não visa nada de coisa alguma para ninguém, no presente ou no futuro. O'Brien, hierarca do Partido, é quem explica a Winston que só nos interessa o poder em si. Nem riqueza, nem luxo, nem vida longa, nem felicidade: só o poder pelo poder, poder puro.
Quando foi publicada em 1949, essa assustadora distopia datada de forma arbitrária num futuro perigosamente próximo logo experimentaria um imenso sucesso de público."
          data-cover="livro 5.png"
        >
          <img src={livro5} alt="Capa do livro " />
          <p>1984 : George Orwell</p>
        </div>

        <div
          className="book-card"
          data-title="As Quatro Rainhas Mortas"
          data-author="Astrid Scholte"
          data-genre="suspense, mistério e thriller"
          data-description="Quatro rainhas mortas. Três dias para encontrar o assassino. Dois romances proibidos. Um final imprevisível.Roubos, mentiras, traições, um luxuoso cenário de realeza e uma região dominada pela sujeira e contrabando: 
neste contexto situa-se Quadara, nação dividida por quatro quadrantes e governada por quatro rainhas diferentes por suas peculiaridades, mas unidas por um objetivo em comum: proteger seu povo.Quando Keralie Corrington, a melhor e mais hábil larápia de Toria, rouba Varin, um mensageiro eonista, um labirinto começa a se formar, conduzindo-os à cena do crime que costura toda a narrativa da história: o palácio real.
Num movimento contínuo de fuga e proximidade, os dois enredam-se numa teia de conspiração ao tentarem, incansavalmente, impedir os assassinatos antes que seja tarde demais.No entanto, algumas questões permanecem: será que Keralie conseguirá não se deixar dominar pelos antigos hábitos em prol de um interesse maior que os seus próprios?
E a união de Quadara, por tanto tempo preservada, conseguirá permanecer inviolada?"
          data-cover="livro 6.png"
        >
          <img src={livro6} alt="Capa do livro " />
          <p>As Quatro Rainhas Mortas</p>
        </div>

        <div
          className="book-card"
          data-title="A Guerra dos Tronos : As Crônicas de Gelo e Fogo, volume 1"
          data-author="George R.R. Martin"
          data-genre="fantasia"
          data-description="A guerra dos tronos é o primeiro livro da série best-seller internacional As Crônicas de Gelo e Fogo, que deu origem à adaptação de sucesso da HBO, Game of Thrones.O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos começou. Como Guardião do Norte,
lorde Eddard Stark não fica feliz quando o rei Robert o proclama a nova Mão do Rei. Sua honra o obriga a aceitar o cargo e deixar seu posto em Winterfell para rumar para a corte, onde os homens fazem o que lhes convém, não o que devem... e onde um inimigo morto é algo a ser admirado.
Longe de casa e com a família dividida, Eddard se vê cada vez mais enredado nas intrigas mortais de Porto Real, sem saber que perigos ainda maiores espreitam a distância. Nas florestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. 
"
          data-cover="livro 7.png"
        >
          <img src={livro7} alt="Capa do livro " />
          <p>A Guerra dos Tronos : As Crônicas de Gelo e Fogo, volume 1</p>
        </div>

        <div
          className="book-card"
          data-title="Duna , volume 1"
          data-author="Frank Herbert"
          data-genre="ficção e aventura"
          data-description="Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.
Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2049."
          data-cover="livro 8.png"
        >
          <img src={livro8} alt="Capa do livro " />
          <p>Duna , volume 1</p>
        </div>

        <div
          className="book-card"
          data-title="Percy Jackson - O mar de monstros"
          data-author="Rick Riordan"
          data-genre="mitologia"
          data-description="Unindo mitologia grega, muita aventura e tramas hilárias, a história de Rick Riordan sobre um adolescente com TDAH que descobre ser filho do deus do mar e precisa navegar entre o mundo humano e o divino se tornou um best-seller e formou uma geração de leitores apaixonados que até hoje acompanham a saga de Percy e seus amigos.
Agora, a Intrínseca relança os cinco livros da série em uma edição com nova arte de capa, tão pedida pelos leitores. As belas ilustrações da artista Victo Ngai acompanham o design da mais nova aventura de Percy Jackson, O cálice dos deuses , que chega às livrarias em lançamento mundial no dia 26 de setembro.Em O Mar de Monstros , segundo livro da série, o ano de Percy foi surpreendentemente calmo. 
Nenhum monstro em sua escola, nenhum acidente esquisito, nenhuma briga em sala de aula."
          data-cover="livro 9.png"
        >
          <img src={livro9} alt="Capa do livro " />
          <p>Percy Jackson - O Mar de Monstros </p>
        </div>

        <div
          className="book-card"
          data-title="Dot hutchison"
          data-author="O Jardim de Borboletas"
          data-genre="Suspense, Mistério e Thriller"
          data-description="Quando a beleza das borboletas encontra os horrores de uma mente doentia Um thriller arrebatador, fenômeno no mundo inteiro perto de uma mansão isolada, existia um maravilhoso jardim. Nele, cresciam flores exuberantes, árvores frondosas...
e uma coleção de preciosas 'borboletas': jovens mulheres, sequestradas e mantidas em cativeiro por um homem brutal e obsessivo, conhecido apenas como Jardineiro. Cada uma delas passa a ser identificada pelo nome de uma espécie de borboleta, tendo, então, a 
pele marcada com um complexo desenho correspondente.quando o jardim é finalmente descoberto, uma das sobreviventes é levada às autoridades, a fim de prestar seu depoimento. "
          data-cover="livro 10.png"
        >
          <img src={livro10} alt="Capa do livro " />
          <p>O Jardim de Borboletas</p>
        </div>
      </div>
    </section>
  );
};

export default Bookshelf;
