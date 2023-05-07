export const onChange = ({ target }, handleState) => {
     const { name, value } = target;
     handleState(prevState => ({ ...prevState, [name]: value.trim() }));
   };