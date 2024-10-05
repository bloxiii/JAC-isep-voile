import { useEffect, useState } from 'react';

export default function Greetings() {
  const [greetings, setGreetings] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/greetings?name=matthew&email=jac@juniorisep.com')
      .then(response => response.text())
      .then(data => setGreetings(data));
  }, []);

  return (
    <div>
      {greetings ? greetings : 'Loading...'}
    </div>
  );
}