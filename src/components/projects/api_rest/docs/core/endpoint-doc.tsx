import Link from "next/link";

export const EndpoinDocumentation = ({
  title,
  entry,
  scheme,
  schemeTitle = 'Response'
}: {
  title: string,
  entry: {
    descripcion: string;
    ruta: string;
    metodo: string;
    url: string;
    parametros?: Object;
  };
  scheme: { title: string, type: string }[] | Object;
  schemeTitle?: string;
}) => {
  return (
    <article className="mt-4 mb-12">
      <h2 className="text-2xl font-bold text-primary/80">{title}</h2>
      <div className="mb-2">
        <p>
          <span className="font-semibold text-muted-foreground">
            Descripción:{" "}
          </span>
          {entry.descripcion}
        </p>
        <div className="flex gap-1 flex-wrap">
          <span className="font-semibold text-muted-foreground">Ruta: </span>
          <span className="bg-emerald-700 px-1 py-0.5 rounded-md dark:text-primary text-card">
            {entry.ruta}
          </span>
        </div>
        <p>
          <span className="font-semibold text-muted-foreground">Método: </span>
          <span className="text-emerald-600 font-mono">{entry.metodo}</span>
        </p>
        <p className="flex gap-1 flex-wrap">
          <span className="font-semibold text-muted-foreground">Url: </span>
          <Link
            href={entry.url}
            target="_blank"
            className="text-cyan-600 underline"
          >
            <span className="hidden md:block">
              {entry.url}
            </span>
            <span className="md:hidden">{entry.ruta}</span>
          </Link>
        </p>
        <div>
          <span className="font-semibold text-muted-foreground">
            Parametros:{" "}
          </span>
          <ul className="list-item list-inside text-sm ml-4">
            {entry.parametros &&
              Object.entries(entry.parametros).map(([key, value]) => (
                <li key={key}>
                  <code className="font-mono text-emerald-700">{key}:</code>
                  {value}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <h3 className="text-lg font-bold text-primary/80 mb-2">Esquema:</h3>
      <div className="rounded-md border-2 border-slate-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-slate-900 overflow-hidden shadow-md">
        <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1.5">
          <code className="font-bold font-mono">{schemeTitle}</code>
        </div>
        <ul className="px-2 py-2">
          {Array.isArray(scheme) &&
            scheme.map((value, index) => (
              <li key={index}>
                <code className="font-mono">{value.title}:</code>
                <span className="text-emerald-600">{value.type}</span>
              </li>
            ))}
          {!Array.isArray(scheme) &&
            typeof scheme === "object" &&
            Object.entries(scheme).map(([key, arr]) =>
              Array.isArray(arr) ? (
                <li key={key}>
                  <span className="font-semibold">
                    {key}:
                  </span>
                  <ul className="ml-4">
                    {arr.map((item: any, idx: number) => (
                      <li key={idx}>
                        <code className="font-mono">{item.title} </code>
                        <span className="text-emerald-600">{item.type}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : null
            )}
        </ul>
      </div>
    </article>
  );
}