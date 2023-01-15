import { Link } from "react-router-dom";

type Props = {
	project: TProject;
};

export const ProjectCard = ({ project }: Props) => {
	return (
		<div className="card col">
			<div className="card-header fw-bold">{project.name}</div>
			<div className="card-body">
				<blockquote className="blockquote mb-0">
					<p>{project.description}</p>
					<div className="d-flex justify-content-between alighn-tems-center">
						<p className="fs-6 fw-bolder">{project.status}</p>
						<Link
							className="btn btn-info"
							to={`/projects/${project.id}`}
						>
							View
						</Link>
					</div>
				</blockquote>
			</div>
		</div>
	);
};
