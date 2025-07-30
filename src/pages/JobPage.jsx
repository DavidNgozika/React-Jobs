import { useLoaderData, useParams } from "react-router-dom";

export default function JobPage() {
  const { id } = useParams();
  const job = useLoaderData();

  return (<h1>{job.title}</h1>);
}

export const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = res.json();
  return data;
};