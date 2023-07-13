import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import userData from '../components/Auth/UserData';

export default () => useContext(AuthContext);
