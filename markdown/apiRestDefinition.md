# API REST Demo Definition

## Libros
### Endpoints
| Método | URL | Description | Coddigo | Esquema de respuesta |
| ------ | --- | ----------- | -------- | -------------------- |
| GET | ``/books`` | Listar todos los libros | 200 | ``BookResponse[]`` |
| GET| ``/books?author={author}`` | Listar libros por autor | 200 | ``BookResponse[]`` |
| GET | ``/books?title={title}`` | Listar libros por titulo | 200 | ``BookResponse[]`` |
| GET | ``/books/{id}`` | Obtener un libro por id | 200 | ``BookResponse`` |

### Esquemas
BookResponse
- id: ``number``
- title: ``string``
- author: ``string``
- pages: ``number``
- read: ``boolean``

## Autores
### Endpoints
| Método | URL | Description | Coddigo | Esquema de respuesta |
| ------ | --- | ----------- | -------- | -------------------- |
| GET | ``/authors`` | Listar todos los autores | 200 | ``AuthorResponse[]`` |
| GET | ``/authors?q={q}`` | Listar autores por nombre | 200 | ``AuthorResponse[]`` |
| GET | ``/authors/{id}`` | Obtener un autor por id | 200 | ``AuthorNBooksResponse`` |

### Esquemas
AuthorResponse
- id: ``number``
- name: ``string``
- birthDate: ``string``
- country: ``string``

AuthorNBooksResponse
- author: ``AuthorResponse``
- books: ``BookResponse[]``