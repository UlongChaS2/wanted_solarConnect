import React, { useState, useEffect } from 'react';
import { currentDay, currentDate } from 'utils/currentDate';
import styled from 'styled-components';

const TodoHead = () => {
  const [time, setTime] = useState<string>('');

  const getCurrentTime = () => {
    const todayDate = new Date();
    const currentTime = todayDate.toLocaleTimeString('en-US');
    setTime(currentTime);
  };

  useEffect(() => {
    setInterval(getCurrentTime, 1000);
    return () => {
      setInterval(getCurrentTime, 1000);
    };
  }, []);

  return (
    <TodoHeadBlock>
      <DateWrap>
        <DayText>{currentDay}</DayText>
        <DateText>{currentDate}</DateText>
      </DateWrap>
      <TimeText>{time}</TimeText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const TimeText = styled(DayText)``;
