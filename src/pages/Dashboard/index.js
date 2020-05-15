import React, { useState } from 'react';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import api from '~/services/api';
import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments', {
      params: {
        page: 1,
      },
    });
    setAppointments(response.data);
  }

  useFocusEffect(() => {
    if (useIsFocused) {
      loadAppointments();
    }
  }, [useIsFocused]);

  async function handleCancel(id) {
    try {
      const response = await api.delete(`appointments/${id}`);

      setAppointments(
        appointments.map((appointment) =>
          appointment.id === id
            ? {
                ...appointment,
                canceled_at: response.data.canceled_at,
              }
            : appointment
        )
      );
    } catch (err) {
      console.tron.log(err);
    }
  }

  return (
    <Background>
      <Container>
        <Title> Agendamentos </Title>

        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
};

export default Dashboard;
