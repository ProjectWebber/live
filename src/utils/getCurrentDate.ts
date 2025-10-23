/**
 * Retorna a data e hora atual.
 *
 * @returns {string} currentDate
 */

const getCurrentDate = (): string => {
    const currentDate: string = new Intl.DateTimeFormat("pt-br", {
        timeZone: "America/Sao_Paulo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
        .format(new Date())
        .toString();

    return currentDate;
};

export default getCurrentDate;
