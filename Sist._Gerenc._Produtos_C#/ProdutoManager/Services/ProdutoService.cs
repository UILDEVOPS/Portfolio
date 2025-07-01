using ProdutoManager.Data;
using ProdutoManager.Models;

namespace ProdutoManager.Services
{
    public class ProdutoService
    {
        private readonly ProdutoRepository _repository;

        public ProdutoService(ProdutoRepository repository)
        {
            _repository = repository;
        }

        public void CadastrarProduto(string nome, decimal preco, int estoque)
        {
            var produto = new Produto(0, nome, preco, estoque);
            _repository.Add(produto);
        }

        public List<Produto> ListarProdutos() => _repository.GetAll().ToList();
    }
}