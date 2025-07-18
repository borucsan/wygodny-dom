export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
export function capitalizeAllWords(str: string): string {
    return str.split('-').map(capitalizeFirstLetter).join('-');
}