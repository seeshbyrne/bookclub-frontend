import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as profileService from '../../services/profileService';
import './MembersPage.css';

const MembersPage = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await profileService.index();
                setUsers(usersData);
                setFilteredUsers(usersData);
            } catch (err) {
                console.error('Failed to fetch users', err);
            }
        };

        fetchUsers();
    }, []);

    // Function to split users into chunks of 4
    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    // Function to handle search input change
    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter users based on the search query
        const filtered = users.filter(user =>
            user.username.toLowerCase().includes(query)
        );
        setFilteredUsers(filtered);
    };

    // Split filtered users into chunks of 4
    const userChunks = chunkArray(filteredUsers, 4);

    return (
        <div className="members-container">
            <h1 className="pt-8">Members</h1>
            <input
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input rounded-md"
            />
            {filteredUsers.length === 0 ? (
                <p>No users found</p>
            ) : (
                <div>
                    {userChunks.map((chunk, index) => (
                        <div key={index} className="userRow">
                            <ul className="userList">
                                {chunk.map((user) => (
                                    <li key={user._id} className="userListItem">
                                        <Link to={"/members/" + user._id} className="userLink">
                                            <div className='icon-name'>
                                                <div className="profile-img">{user.username.charAt(0).toUpperCase()}</div>
                                                <h2>{user.username}</h2>
                                            </div>
                                            <p className='text-xs text-center text-zinc-400 member-since'>
                                                Member since </p>
                                            <p className='text-xs text-center text-zinc-400 member-date'>
                                                {new Date(user.createdAt).toLocaleDateString(undefined, {
                                                    year: 'numeric',
                                                    month: 'long'
                                                })}
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="square-container-members">
                                <div className="trapezium-members"></div>
                                <div className="bottom-part-members"></div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MembersPage;
