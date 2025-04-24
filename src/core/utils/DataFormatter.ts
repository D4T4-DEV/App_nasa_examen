export class DataFormatter {

    formatteDateToUSA(date: Date): string {

        // Obtiene el año completo ej. 2022
        const year = date.getFullYear();

        // parsea la fecha y devuelve su valor 
        // desde enero -> 0 hasta diciembre -> 11, para ser de un calendario de 12 meses se le suma uno
        // y si no tiene dos digitos le asigna un cero al inicio, ya que se tendra una cadena de dos digitos
        // ej Enero -> 0 + 1 -> 1 como tiene un digito le pondra 01
        const month = String(date.getMonth() + 1).padStart(2, '0');

        // Obtiene el dia y si no tiene dos digitos se le pone a la izquierda un cero
        // ej 1 como tiene un digito le pondra 01
        const day = String(date.getDate()).padStart(2, '0');

        // retorna el valor YYYY-MM-DD
        return `${year}-${month}-${day}`;
    }
}