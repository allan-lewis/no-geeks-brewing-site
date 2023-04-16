export default function BatchPage({batches}) {
    return (
      <>
        {batches.batches.map((object, i) => <div key={object.key}><span></span><span>{new Date(object.brewDate).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</span> - <span>Batch #{object.batchNumber}</span> - <span>{object.name}</span> ({object.style})</div>)}
      </>
    )
}
