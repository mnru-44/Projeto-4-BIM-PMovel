export function Capitalize(word) {
    if (word !== undefined) {
        const resultado = word.toLowerCase();    
        const capitalized = resultado.charAt(0).toUpperCase() + resultado.slice(1);
        return (capitalized)
    }
}