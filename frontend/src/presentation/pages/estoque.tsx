import AutorCreateDialog from '../components/autor/autor-delete-dialog';
import Button from '../components/button';

const Estoque = () => {
  return (
    <div className="p-32">
      <div className="bg-blueShadeado w-full py-8 rounded-lg mb-10 pl-8">
        <h1 className="text-3xl mb-4">Gerenciar Estoque</h1>
        <div className="flex gap-4">
          <Button
            text="Cadastrar Livro"
            onClick={() => console.log('Clicked')}
          />
          <AutorCreateDialog />
        </div>
      </div>
    </div>
  );
};

export default Estoque;
