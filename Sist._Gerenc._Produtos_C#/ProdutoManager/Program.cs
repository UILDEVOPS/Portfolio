using ProdutoManager.Services;
using ProdutoManager.Data;
using ProdutoManager.Utils;

var repository = new ProdutoRepository();
var service = new ProdutoService(repository);

while (true)
{
    Console.WriteLine("\n=== MENU ===");
    Console.WriteLine("1. Cadastrar Produto");
    Console.WriteLine("2. Listar Produtos");
    Console.WriteLine("3. Sair");
    
    Console.Write("Opção: ");
    var option = Console.ReadLine();

    switch (option)
    {
        case "1":
            Console.Write("Nome: ");
            var nome = Console.ReadLine();
            
            Console.Write("Preço: ");
            decimal preco;
            while (!decimal.TryParse(Console.ReadLine(), out preco))
            {
                ConsoleHelper.ShowError("Preço inválido! Digite novamente:");
            }
            
            Console.Write("Estoque: ");
            int estoque;
            while (!int.TryParse(Console.ReadLine(), out estoque))
            {
                ConsoleHelper.ShowError("Estoque inválido! Digite novamente:");
            }
            
            service.CadastrarProduto(nome, preco, estoque);
            ConsoleHelper.ShowSuccess("Produto cadastrado com sucesso!");
            break;
            
        case "2":
            var produtos = service.ListarProdutos();
            Console.WriteLine("\n=== PRODUTOS ===");
            foreach (var p in produtos)
            {
                Console.WriteLine($"ID: {p.Id} | {p.Nome} | R${p.Preco} | Estoque: {p.Estoque}");
            }
            break;
            
        case "3":
            return;
            
        default:
            ConsoleHelper.ShowError("Opção inválida!");
            break;
    }
}