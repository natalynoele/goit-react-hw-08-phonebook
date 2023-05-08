export default function isNumeric(value, name) {
                  if ('number' === name) {
                    
    let check = /^-?\d+$/.test(value);                                
    return check ? value : '';
  }
  return value;
}
