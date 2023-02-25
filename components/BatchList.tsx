import useSWR, { SWRConfig } from 'swr'

export default function BatchList({filter}) {
  const fetcher = (...args) => fetch(`https://api.brewfather.app/v2/batches?complete=true&limit=50&status=` + filter, {
    headers: {
      'Authorization': 'Basic '
    }
  }).then(res => res.json()).then(data => {
      const transformedData: Batches = {
        batches: []
      }

      data.sort((d1, d2) => d2.brewDate - d1.brewDate).forEach((element) => {
        transformedData.batches.push({ key: element._id, brewDate: element.brewDate, batchNumber: element.batchNo, name: element.name, category: element.recipe.style.name })
      });

      // console.log(data)

      return transformedData;
    })

  const { data, error, isLoading } = useSWR('/api/batches/' + filter, fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <SWRConfig
      value={{ refreshInterval: 60000 }}>
      {data.batches.map((batch) => (
        <div key={batch.key}>
          <div><span>{new Date(batch.brewDate).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</span> - <span>Batch #{batch.batchNumber}</span> - <span>{batch.name}</span> ({batch.category})</div>
        </div>
      ))}
    </SWRConfig>
  )
}

interface Batch {
  key: string,
  brewDate: number,
  batchNumber: number,
  name: string,
  category: string
}

interface Batches {
  batches: Batch[]
}
