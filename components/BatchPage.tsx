import BatchList from "./BatchList";

export default function BatchPage({title, filter}) {
    return (
      <>
        <BatchList filter={filter} />
      </>
    )
}
