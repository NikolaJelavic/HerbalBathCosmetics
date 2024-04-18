import { useState } from 'react';

export default function Calculator() {
  const [result, setResult] = useState('');

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
    <div className="h-screen flex flex-col justify-center items-center bg-teal-500 transition duration-800">
      <div className="w-80 flex flex-col items-center">
        <div className="w-full flex justify-center items-center mb-4">
          <h1 className="text-white">Calculator</h1>
        </div>
        <div className="mb-4 flex space-x-2">
          <input type="text" name="result" id="result" placeholder="Result" readOnly className="bg-white w-48 p-4 text-gray-700 rounded-xl" value={result} />
          <input type="button" value="C" id="clear-button" className="bg-red-500 text-white px-4 rounded-xl" onClick={() => setResult('')} />
        </div>
        <div className="mb-4 flex space-x-2">
          <input type="button" value="1" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('1')} />
          <input type="button" value="2" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('2')} />
          <input type="button" value="3" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('3')} />
          <input type="button" value="+" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('+')} />
        </div>
        <div className="mb-4 flex space-x-2">
          <input type="button" value="4" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('4')} />
          <input type="button" value="5" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('5')} />
          <input type="button" value="6" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('6')} />
          <input type="button" value="-" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('-')} />
        </div>
        <div className="mb-4 flex space-x-2">
          <input type="button" value="7" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('7')} />
          <input type="button" value="8" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('8')} />
          <input type="button" value="9" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('9')} />
          <input type="button" value="*" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('*')} />
        </div>
        <div className="mb-4 flex space-x-2">
          <input type="button" value="/" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('/')} />
          <input type="button" value="0" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('0')} />
          <input type="button" value="." className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={() => liveScreen('.')} />
          <input type="button" value="=" className="bg-white text-gray-700 p-4 w-1/4 rounded-xl" onClick={calculate} />
        </div>
      </div>
    </div>
  );
}
