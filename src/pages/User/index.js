import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

export default function User({ navigation }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    async function getStars() {
      const user = navigation.getParam('user');

      const response = await api.get(`/users/${user.login}/starred`);
      setStars(response.data);
    }
    getStars();
  }, [navigation, setStars]);

  return <View />;
}

User.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('user').name,
});

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
