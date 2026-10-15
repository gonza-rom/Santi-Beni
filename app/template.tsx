// Se vuelve a montar en cada navegación: da una entrada suave a cada página.
export default function Template({ children }: { children: React.ReactNode }) { return <div className="page-in">{children}</div>; }
