import React from 'react';
import styled from 'styled-components';

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  const getDate = new Date();

  const enDateForm = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
  })
    .format()
    .split(',');
  console.log(getDate);
  const currentDay = enDateForm[0];
  const currentDate = `${enDateForm[1]},${enDateForm[2]}`;

  return (
    <TodoHeadBlock>
      <DateWrap>
        <DayText>{currentDay}</DayText>
        <DateText>{currentDate}</DateText>
      </DateWrap>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateWrap = styled.div`
  ${({ theme }) => theme.flexSet()};
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;
