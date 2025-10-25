/**
 * Deixa a primeira letra maiuscula de uma string.
 *
 * @param {string} string
 * @returns string
 */

export default function captalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
