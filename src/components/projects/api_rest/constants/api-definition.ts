import { API_URL } from "./api-url";

const bookScheme = [
    { title: "id", type: "number" },
    { title: "title", type: "string" },
    { title: "author", type: "string" },
    { title: "pages", type: "number" },
    { title: "read", type: "boolean" },
];

const authorScheme = [
    { title: "id", type: "number" },
    { title: "name", type: "string" },
    { title: "birthDate", type: "string" },
    { title: "country", type: "string" },
  ];

export const API_DEFINITION = {
    books: {
      entries: {
        all: {
          descripcion: "Obtener listado de libros",
          ruta: "/books",
          url: `${API_URL}/books`,
          metodo: "GET",
          parametros: {
            author: "filtrar por nombre de autor",
            title: "filtrar por titulo del libro",
          },
        },
        one: {
          descripcion: "Obtener un libro por ID",
          ruta: "/books/{id}",
          url: `${API_URL}/books/1`,
          metodo: "GET",
        },
      },
      scheme: bookScheme,
    },
    authors: {
      entries: {
        all: {
          descripcion: "Obtener listado de autores",
          ruta: "/authors",
          url: `${API_URL}/authors`,
          metodo: "GET",
          parametros: {
            q: "filtrar por nombre de autor",
          },
        },
        one: {
          descripcion: "Obtener autor por id junto con su listado de libros",
          ruta: "/authors/{id}",
          url: `${API_URL}/authors/1`,
          metodo: "GET",
        },
      },
      schemes: {
        one: {
          author: authorScheme,
          "books [ ] ": bookScheme,
        },
        all: authorScheme,
      },
    },
  };