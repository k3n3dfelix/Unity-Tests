import { somar } from "../utils/calculator";
import { subtrair } from "../utils/calculator";
import { dividir } from "../utils/calculator";
import { multiplicar } from "../utils/calculator";

import BookService from "../services/BooksService";

describe("Função Somar", () => {
  it("deve retornar a soma de dois números", () => {
    const result = somar(2, 3);
    expect(result).toBe(5);
  });

  it("deve retornar a soma de dois números negativos", () => {
    const result = somar(-2, -3);
    expect(result).toBe(-5);
  });

  it("deve retornar a soma de um número positivo e um número negativo", () => {
    const result = somar(2, -3);
    expect(result).toBe(-1);
  });
});

describe("Função Subtrair", () => {
  it("deve retornar a diferença entre dois números", () => {
    const result = subtrair(5, 3);
    expect(result).toBe(2);
  });

  it("deve retornar a diferença entre dois números negativos", () => {
    const result = subtrair(-5, -3);
    expect(result).toBe(-2);
  });

  it("deve retornar a diferença entre um número positivo e um número negativo", () => {
    const result = subtrair(5, -3);
    expect(result).toBe(8);
  });
});

describe("Função Dividir", () => {
  it("deve retornar o quociente da divisão entre dois números", () => {
    const result = dividir(10, 2);
    expect(result).toBe(5);
  });

  it("deve retornar o quociente da divisão entre dois números negativos", () => {
    const result = dividir(-10, -2);
    expect(result).toBe(5);
  });

  it("deve retornar o quociente da divisão entre um número positivo e um número negativo", () => {
    const result = dividir(10, -2);
    expect(result).toBe(-5);
  });
});

describe("Função Multiplicar", () => {
  it("deve retornar o produto da multiplicação entre dois números", () => {
    const result = multiplicar(2, 3);
    expect(result).toBe(6);
  });

  it("deve retornar o produto da multiplicação entre dois números negativos", () => {
    const result = multiplicar(-2, -3);
    expect(result).toBe(6);
  });

  it("deve retornar o produto da multiplicação entre um número positivo e um número negativo", () => {
    const result = multiplicar(2, -3);
    expect(result).toBe(-6);
  });
});

describe("BookService", () => {
  it("deve retornar todos os livros", () => {
    const result = BookService.getBooks();
    expect(result.length).toEqual(10);
  });

  test("deve retornar todas as categorias", () => {
    const result = BookService.getCategories();
    expect(result.length).toEqual(3);
  });

  test("deve retornar um livro cadastrado", () => {
    const result = BookService.getBookById(1);
    expect(result.length).toEqual(1);
  });

  test("deve cadastrar um livro", () => {
    const novoLivro = {
      id: 11,
      titulo: "O Nome do Vento",
      autor: "Patrick Rothfuss",
      anoPublicacao: 2007,
      genero: "Fantasia",
      editora: "Editora Z",
    };

    const result = BookService.createBook(novoLivro);

    expect(result).toBe(novoLivro);
  });

  test("deve apagar um livro", () => {
    const result = BookService.deleteBook(11);

    expect(result).toBeTruthy();
  });

  test("deve trazer null ao não encontrar o livro para apagar ", () => {
    const result = BookService.deleteBook(12);

    expect(result).toBeNull();
  });

  test("deve atualizar um livro ", () => {
    const livroAtualizado = {
      id: 1,
      titulo: "Dom Quixote de La Mancha",
      autor: "Miguel de Cervantes",
      anoPublicacao: 1605,
      genero: "Romance",
      editora: "Editora X",
    };
    const result = BookService.updateBook(1, livroAtualizado);

    expect(result).toBe(livroAtualizado);
  });

  test("deve retornar null ao não encontrar um livro para atualizar", () => {
    const livroAtualizado = {
      id: 1,
      titulo: "Dom Quixote de La Mancha",
      autor: "Miguel de Cervantes",
      anoPublicacao: 1605,
      genero: "Romance",
      editora: "Editora X",
    };
    const result = BookService.updateBook(12, livroAtualizado);

    expect(result).toBeNull();
  });
});
