import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [number, setAllowedNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [Password, setPassword] = useState("");


  /////////////useRef hook////////////

  const passwordRef = useRef()

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (character) str += "{}@#$%^&*()!~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, character, setPassword]);

  const copyPasswordTo = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  } , [Password])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md max-auto shadow-md rounded-lg px-4 py-4  my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-center text-white my-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={Password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordTo} className='px-4 rounded-none outline-none py-4 ml-3 bg-black'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={8}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>length: {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              id='numberInput'
              onChange={() => { setAllowedNumber((prev) => !prev) }}
            />
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              id='characterInput'
              onChange={() => { setCharacter((prev) => !prev) }}
            />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
