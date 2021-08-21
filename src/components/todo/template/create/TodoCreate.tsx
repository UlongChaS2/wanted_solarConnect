import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { DatePicker, Modal } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Itodo } from 'components/todo/TodoService';

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId,
}: TodoCreateProps) => {
  const [value, setValue] = useState('');
  const [dueDateStr, setDueDateStr] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      createTodo({
        id: nextId,
        text: value,
        done: false,
        dueDate: dueDateStr,
      });
      incrementNextId(); // nextId 하나 증가

      setValue('');
    } else {
      Modal.error({
        title: '입력창에 계획을 적어주세요❗️',
        content: '목표한 기간이 있으면 캘린더에서 날짜를 선택해주세요🗓',
      });
      return;
    }
  };

  function selectDueDate(value: any, dateString: string) {
    setDueDateStr(dateString);
    return dueDateStr;
  }
  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChange}
            value={value}
          />
          <CircleButton>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
        <DueDate onChange={selectDueDate} />
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);

const CircleButton = styled.button`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  margin-left: 20px;
`;

const InsertFormPositioner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 30px 60px;
  background: #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 14px;
`;

const Input = styled.input`
  flex: 3;
  padding: 12px;
  border: 1px solid #dddddd;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

const DueDate = styled(DatePicker)`
  width: 40%;
  height: 40px;
`;
