export const InCompleteArea = (props) => {
  const { inCompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className='incomplete-area'>
        <p className="list-title">未完了のリスト</p>
        <ul>
          {inCompleteTodos.map((todo) => (
            <li key={todo.id}>
              <div className="item-list">
                <p className="title">{todo.text}</p>
                <button onClick={() => onClickComplete(todo.id)}>完了</button>
                <button onClick={() => onClickDelete(todo.id)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
};