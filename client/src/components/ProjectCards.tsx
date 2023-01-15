import { Link } from "react-router-dom";

type Props = {
	project: TProject;
};

export const ProjectCard = ({ project }: Props) => {
	return (
		<div className="col-md-6">
			<div className="card mb-3">
				<div className="card-body">
					<div className="d-flex justify-content-between alighn-tems-center">
						<h5 className="card-title">{project.name}</h5>

						<a
							className="btn btn-light"
							href={`/projects/${project.id}`}
						>
							View
						</a>
					</div>
					<p className="small">
						Status <strong>{project.status}</strong>
					</p>
				</div>
			</div>
		</div>
	);
};
