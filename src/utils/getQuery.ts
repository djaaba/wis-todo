export const getQuery = (): number => {
	return +document.location.pathname.slice(1);
}