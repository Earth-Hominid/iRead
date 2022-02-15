import React from 'react';
import { useAuth } from '../contexts/AuthGoogle';

export default function LogIn() {
  const { signIn } = useAuth();
  return <div>LogIn</div>;
}
