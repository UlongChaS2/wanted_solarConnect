import { Modal } from 'antd';
import {
  CheckOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Itodo } from 'components/todo/TodoService';
import React from 'react';
import styled, { css } from 'styled-components';

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const { confirm } = Modal;

  const handleToggle = (id: number) => {
    toggleTodo(id);
  };

  const handleRemove = (id: number) => {
    showDeleteConfirm(id);
  };

  function showDeleteConfirm(id: number) {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        removeTodo(id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return (
    <TodoItemBlock>
      <CheckCircle done={todo.done} onClick={() => handleToggle(todo.id)}>
        {todo.done && <CheckOutlined />}
      </CheckCircle>
      <Text done={todo.done} onClick={() => handleToggle(todo.id)}>
        {todo.text}
      </Text>
      <Date>{todo.dueDate}</Date>
      <Remove onClick={() => handleRemove(todo.id)}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 3;
  flex-direction: row;
  font-size: 16px;
  color: #119955;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const Date = styled.div`
  margin-right: 20px;
  color: black;
  font-size: 16px;
`;
