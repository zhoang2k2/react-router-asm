// eslint-disable-next-line react/prop-types
function Input({ title, type, value, onChange, onBlur }) {
  return (
    <>
      <label htmlFor={title}>{title}:</label>
      <input
        type={type}
        name={title}
        id={title}
        placeholder={`Enter ${title}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
    </>
  );
}

export default Input;
