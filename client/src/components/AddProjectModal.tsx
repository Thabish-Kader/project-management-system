import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";

import { GET_CLIENTS } from "../queries/clientQueries";
import { ADD_CLIENTS } from "../mutations/clientMutation";
export const AddProjectModal = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [addClient] = useMutation(ADD_CLIENTS, {
		variables: { name, email, phone },
		refetchQueries: [{ query: GET_CLIENTS }],
	});
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (name === "" || email === "" || phone === "")
			return alert("Please fill in the fields");

		addClient({ variables: { name, email, phone } });
		setEmail("");
		setName("");
		setPhone("");
	};
	return (
		<>
			<button
				type="button"
				className="btn btn-secondary"
				data-bs-toggle="modal"
				data-bs-target="#addClientModal"
			>
				<div className="d-flex align-items-center">
					<FaUser className="icon" />
					<div>Add Client</div>
				</div>
			</button>

			<div
				className="modal fade"
				id="addClientModal"
				aria-labelledby="addClientModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="addClientModalLabel"
							>
								Add Client
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label className="form-label">Name</label>
									<input
										type="text"
										className="form-control"
										id="name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">Email</label>
									<input
										type="email"
										className="form-control"
										id="email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">Phone</label>
									<input
										type="text"
										className="form-control"
										id="phone"
										value={phone}
										onChange={(e) =>
											setPhone(e.target.value)
										}
									/>
								</div>

								<button
									type="submit"
									data-bs-dismiss="modal"
									className="btn btn-secondary"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
