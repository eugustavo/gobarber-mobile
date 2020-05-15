import React, { useState, useMemo } from 'react';
import { DatePickerIOS } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Piker } from './styles';

const DateInput = ({ date, onChange }) => {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" size={20} color="#FFF" />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <Piker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minuteInterval={60}
            locale="pt"
            mode="date"
          />
        </Piker>
      )}
    </Container>
  );
};

export default DateInput;
