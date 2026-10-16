export const CompleteArea = (props) => {
  const { completeTodos, onClickBack } = props;
  return(
    <div className="complete-area">
      <p className="list-title">完了したリスト</p>
      <ul>
        {completeTodos.map((todo) => (
          <li key={todo.id}>
            <div className="item-list">
              <p className="title">{todo.text}</p>
              <button onClick={() => onClickBack(todo.id)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};