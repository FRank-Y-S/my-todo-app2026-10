export const InputArea = (props) => {
  const { onSubmit, text, onChange } = props;
  return (
    <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit">追加</button>
    </form>
  );
};