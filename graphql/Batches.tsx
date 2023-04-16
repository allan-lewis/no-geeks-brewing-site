import { gql } from "@apollo/client";
import client from "./apollo-client";
import { Batches } from "../types/Batches";

export async function load(filter: String) {
    const { data } = await client.query({
      query: gql`
        query {
          batches(status: "${filter}") {
            id
            name
            batchNumber
            status
            style
            brewDate
          }
        }
      `,
    });
  
    const transformedData: Batches = {
      batches: []
    }
  
    data.batches.forEach((element) => {
      transformedData.batches.push({key: element.id, 
        brewDate: element.brewDate, 
        batchNumber: element.batchNumber, 
        name: element.name, 
        style: element.style, 
        status: element.status})
    });
  
    transformedData.batches.sort((d1, d2) => d2.brewDate - d1.brewDate)
  
    return {
      props: {
        batches: transformedData,
      },
    };
  }
