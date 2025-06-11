import { API_DEFINITION } from "../constants/api-definition";
import { EndpoinDocumentation } from "./core/endpoint-doc";

export const ApiDocumentation = () => {
    return (
      <section id="api-docs">
        <h1 className="text-2xl font-bold text-primary/90">Documentación</h1>
        <hr className="mt-2" />
        <EndpoinDocumentation
          title="Libros"
          entry={API_DEFINITION.books.entries.all}
          scheme={API_DEFINITION.books.scheme}
          schemeTitle="BookResponse[]"
        />
        <EndpoinDocumentation
          title="Libro"
          entry={API_DEFINITION.books.entries.one}
          scheme={API_DEFINITION.books.scheme}
          schemeTitle="BookResponse"
        />
        <EndpoinDocumentation
        title="Autores"
        entry={API_DEFINITION.authors.entries.all}
        scheme={API_DEFINITION.authors.schemes.all}
        schemeTitle="AuthorResponse[]"
        />
        <EndpoinDocumentation
        title="Autor"
        entry={API_DEFINITION.authors.entries.one}
        scheme={API_DEFINITION.authors.schemes.one}
        schemeTitle="AuthorResponse"
        />
      </section>
    );
  };