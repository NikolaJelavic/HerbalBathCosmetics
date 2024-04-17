

export default function One() {
    return (
        <div class="h-screen flex flex-col justify-center items-center bg-teal-500 transition duration-800">
  <div class="w-80 flex flex-col items-center">
    <div class="w-full flex justify-center items-center mb-4">
      <h1 class="text-white">Calculator</h1>
      <div class="flex items-center">
       
      </div>
    </div>
    <div class="mb-4 flex space-x-2">
      <input type="text" name="result" id="result" placeholder="Result" readonly class="bg-white w-48 p-4 text-gray-700 rounded-xl" />
      <input type="button" value="C" id="clear-button" class="bg-red-500 text-white px-4 rounded-xl" />
    </div>
    <div class="mb-4 flex space-x-2">
      <input type="button" value="1" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
      <input type="button" value="2" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
      <input type="button" value="3" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
      <input type="button" value="+" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
    </div>
    <div class="mb-4 flex space-x-2">
      <input type="button" value="4" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
      <input type="button" value="5" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
      <input type="button" value="6" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
      <input type="button" value="-" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
    </div>
    <div class="mb-4 flex space-x-2">
      <input type="button" value="7" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
      <input type="button" value="8" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
      <input type="button" value="9" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
      <input type="button" value="x" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
    </div>
    <div class="mb-4 flex space-x-2">
      <input type="button" value="/" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
      <input type="button" value="0" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
      <input type="button" value="." class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
      <input type="button" value="=" class="bg-white text-gray-700 p-4 w-1/4 rounded-xl" />
    </div>
  </div>
</div>

      );
    };
