import React from 'react';

export default function App() {
  return (
    <Father>
      <Son age={12} name="Eris" />
    </Father>
  );
}

function Father(props) {
  return React.cloneElement(props.children, {
    mes: 'Message from Father Component',
  });
}

function Son(props) {
  console.log(props);
  return <div>Hello I'm Son.</div>;
}
