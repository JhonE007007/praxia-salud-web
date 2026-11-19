/** Resuelve rutas de /public para que funcionen en cualquier hosting. */
export const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;
