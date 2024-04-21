

export default function Two() {
    return <>
      

<div class="container mx-auto my-3">
            {/* <button class="text-white focus:outline-none lg:hidden">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            <div class="hidden lg:flex lg:items-center lg:w-auto" id="navbarSupportedContent">
                <form class="flex">
                    <input type="search" id="search" class="form-input rounded-l-lg py-2 px-4" placeholder="Search" aria-label="Search"/>
                    <button class="bg-gray-800 text-white rounded-r-lg px-4 py-2" type="submit">Search</button>
                </form>
            </div> */}
    <div class="max-w-lg mx-auto bg-gray-900 text-white p-4 mb-6 rounded-lg">
        <h5 class="text-xl font-semibold mb-2">Write a note</h5>
        <div class="form-group">
            <textarea class="form-input w-full bg-gray-800 text-white border-none rounded-lg py-2 px-4" id="addNote" aria-label="With textarea"></textarea>
        </div>
        <br />
        <button id="addBtn" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Add</button>
    </div>

    <hr class="border-t border-gray-700 my-6"/>

    <div id="noMatches" class="flex flex-wrap -mx-4 container-fluid">

    </div>

    <div id="notes" class="flex flex-wrap -mx-4 container-fluid">

    </div>
</div>

    </>
};