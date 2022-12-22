import React, { Fragment, useState } from 'react';
import { getUser } from '../redux/actions';

export const User = ({ isVisible = false, onClose }) => {
	const [user, setUser] = useState([]);

	return (
		<Fragment>
			{!isVisible ? null : (
				<div className="modal">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">User</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
									onClick={onClose}
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<p>Modal body text goes here.</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
};
