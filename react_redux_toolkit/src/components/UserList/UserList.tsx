"use client";
import React, { useEffect } from 'react';
//redux
import { fetchUsers } from '../../store/slices/users';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';




const UserList = () => {
	const dispatch: AppDispatch = useDispatch();
	const users = useSelector((state: RootState) => state.users.users)
	const status = useSelector((state: RootState) => state.users.status)
	const error = useSelector((state: RootState) => state.users.error)

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchUsers());
		}
	}, [dispatch]);


	return (
		<div className="container">
			{status === 'loading' && <div>Loading...</div>}
			{status === 'failed' && <div>Error</div>}
			<div className='row'>
				{users.map((user) => (
					<div key={user.id} className='col-md-3'>
						<div className='card'>
							<img src={user.avatar} alt="avatar" />
							<div className='card-body'>
								<h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
								<p className='card-text'>{user.email}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default UserList;
