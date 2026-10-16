import { useState, useEffect } from "react";
import './App.css';
import { InputArea } from "./components/InputArea";
import { InCompleteArea } from "./components/InCompleteArea";
import { CompleteArea } from "./components/CompleteArea";

export const App = () => {
  const [inCompleteTodos, setIncompleteTodos] = useState(() => {
    const saved = localStorage.getItem('inCompleteTodos');
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState('');
  const [completeTodos, setCompleteTodos] = useState(() => {
    const saved = localStorage.getItem('completeTodos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('inCompleteTodoa', JSON.stringify(inCompleteTodos));
  },[inCompleteTodos]);

  const onChangeText = (e) => setText(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { id: crypto.randomUUID(), text: text };
    setIncompleteTodos([...inCompleteTodos, newTodo]);
    setText('');
  };

  const onClickComplete = (targetId) => {
    const targetTodo = inCompleteTodos.find((todo) => todo.id === targetId);

    setIncompleteTodos(inCompleteTodos.filter((todo) => todo.id !== targetId));

    setCompleteTodos([...completeTodos, targetTodo]);
  }

  const onClickDelete = (targetId) => {
    if(!confirm('削除します。よろしいですか？')) return;

    setIncompleteTodos(inCompleteTodos.filter((todo) => todo.id !== targetId));
  }

  const onClickBack = (targetId) => {
    const targetTodo = completeTodos.find((todo) => todo.id === targetId);
    setCompleteTodos(completeTodos.filter((todo) => todo.id !== targetId));
    setIncompleteTodos([...inCompleteTodos, targetTodo]);
  }

  return (
    <>
      <h1>メモ帳アプリ</h1>
      <InputArea 
        onSubmit={handleSubmit}
        text={text}
        onChange={onChangeText}
      />
      <InCompleteArea
        inCompleteTodos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteArea
        completeTodos={completeTodos}
        onClickBack={onClickBack}
      />
    </>
  )
}