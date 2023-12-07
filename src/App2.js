import React from 'react';
import Comp1 from './HookUse/comp1';
import Test2 from './Test2';
import Test from './Test.tsx';

// ...

function App2() {
  return (
    <>
    {/* <Comp1></Comp1> */}
    {/* <Test2 arg={77}></Test2> */}
    <Test arg={55}></Test>
    </>
  );
}

export default App2;
