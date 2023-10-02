import SearchIcon from '@mui/icons-material/Search';
export default function Searchbar() {
    return (
        <div className='w-[35vw] h-12 bg-white rounded-[2.5rem] flex'>
            <div className='ml-5 absolute mt-3'>
                <img src="search.svg"/>
            </div>
            <input type="text" className=' rounded-3xl ml-14 h-10 mt-1 w-[25vw]  bg-white outline-none' placeholder='Search Your Preference...'/>
        </div>
    )
}