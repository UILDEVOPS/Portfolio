using System.Collections.Generic;
using ProdutoManager.Models;

namespace ProdutoManager.Data
{
    public class ProdutoRepository
    {
        private readonly List<Produto> _produtos = new();
        private int _nextId = 1;

        public void Add(Produto produto)
        {
            produto.Id = _nextId++;
            _produtos.Add(produto);
        }

        public IEnumerable<Produto> GetAll() => _produtos;

        public Produto? GetById(int id) => _produtos.FirstOrDefault(p => p.Id == id);
    }
}