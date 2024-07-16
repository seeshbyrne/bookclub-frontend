import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as profileService from '../../services/profileService';
import './MembersPage.css';

const MembersPage = () => {
    const [users, setUsers] = useState([]);

    const userListItems = users.map((user) => (
        <li key={user._id} className='userListItem'>
            <Link to={"/members/" + user._id}>
                <h2>{user.username}</h2>
            </Link>
        </li>
    ))

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await profileService.index();
                setUsers(usersData);
            } catch (err) {
                setError('Failed to fetch users');
                console.error(err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Members</h1>
            {users.length === 0 ? (
                <p>No users found</p>
            ) : (
                <ul className="userList">
                    {userListItems}
                </ul>
            )}
        </div>
    );
};

export default MembersPage;