// eslint-disable-next-line react/prop-types
function Button({ title, onClick, style }) {
  return (
    <>
      <button onClick={onClick} style={style}>
        {title}
      </button>
    </>
  );
}

export default Button;
