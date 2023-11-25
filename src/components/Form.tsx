import { useState } from 'react';
type Props = {
    fetchUser: (username: string) => void
}
function Form({ fetchUser }: Props) {

    const [username, setUsername] = useState('');
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        fetchUser(username)
    }

    return <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto ">
        <div className=" flex mt-10 items-center">
            <label htmlFor="username">Name:</label>
            <input
                className="block w-full px-3 py-2 border border-gray-300
               form-input rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 "
                type="text"
                name='username'
                value={username}
                id='username'
                onChange={e => setUsername(e.target.value)}
                required />
            <button
                className='px-3 py-2 ml-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md leading-4 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'
                type="submit">Search</button>
        </div>
    </form>
}
export default Form