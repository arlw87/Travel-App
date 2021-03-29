/**
 * Determine if the date supplied is in the future or not
 * Calculate the supplied dates ms from epoch subtract
 * current ms from epoch. If result higher than 0 then
 * date is in the future
 */
export const isValidateDate = (date) => {
    return ((Date.parse(date) - Date.now()) > 0);
}          

/**
 * Checking the Destination input
 * Input must be one character or more, not 
 */
export const isValidationPlaceName = (name) => {
    const regex = new RegExp('^[a-z][a-z,\\s]*$');
    return regex.test(name);
}