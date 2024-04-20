import React, { useState } from 'react';
import sunIcon from '../SunIcon.svg';
import moonIcon from '../MoonIcon.svg';

export default function Calculator() {
  const [result, setResult] = useState('');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const liveScreen = (enteredValue) => {
    setResult(result + enteredValue);
  };

  const calculate = () => {
    try {
      const calculatedValue = eval(result);
      if (isNaN(calculatedValue)) {
        setResult("Can't divide 0 with 0");
        setTimeout(() => {
          setResult('');
        }, 1300);
      } else {
        setResult(calculatedValue);
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className={`h-screen flex flex-col justify-center items-center ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} transition duration-500`}>
      <div className="w-80 flex flex-col items-center">
        <div className="w-full flex justify-center items-center mb-4">
          <h1 className={`text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>Calculator</h1>
          <img src={theme === 'light' ? moonIcon : sunIcon} alt="Theme Icon" className="w-6 h-6 ml-2 cursor-pointer bg-slate-400 rounded-xl p-1" onClick={toggleTheme} />
        </div>
        <div className="mb-4 flex space-x-2">
          <input type="text" name="result" id="result" placeholder="Result" readOnly className={`bg-gray-200 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'} w-48 p-4 rounded-xl`} value={result} />
          <input type="button" value="C" id="clear-button" className={`bg-red-500 text-white px-4 rounded-xl`} onClick={() => setResult('')} />
        </div>
        <div className="mb-4 flex space-x-2">
          <input type="button" value="1" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('1')} />
          <input type="button" value="2" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('2')} />
          <input type="button" value="3" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('3')} />
          <input type="button" value="+" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('+')} />
        </div>
        <div className="mb-4 flex space-x-2">
            <input type="button" value="4" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('4')} />
            <input type="button" value="5" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('5')} />
            <input type="button" value="6" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('6')} />
            <input type="button" value="-" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('-')} />
        </div>
        <div className="mb-4 flex space-x-2">
            <input type="button" value="7" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('7')} />
            <input type="button" value="8" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('8')} />
            <input type="button" value="9" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('9')} />
            <input type="button" value="*" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('*')} />
            </div>
        <div className="mb-4 flex space-x-2">
            <input type="button" value="/" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('/')} />
            <input type="button" value="0" className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('0')} />
            <input type="button" value="." className={`bg-gray-300 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={() => liveScreen('.')} />
            <input type="button" value="=" className={`bg-gray-400 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'} p-4 w-1/4 rounded-xl`} onClick={calculate} />
        </div>

      </div>
    </div>
  );
}
