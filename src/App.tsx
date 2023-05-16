import { ApolloProvider } from "@apollo/client";
import { Router } from "./components/Router";

import { client } from "./lib/apollo";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

/* useEffect(() => {
  client
    .query({
      query: GET_LESSONS_QUERY,
    })
    .then((response) => {
      console.log(response.data);
    });
}, []); */

/* import { gql, useQuery } from "@apollo/client";
      
      const GET_LESSONS_QUERY = gql`
        query {
          lessons {
            id
            title
          }
        }
      `;
      interface Lesson {
        id: string;
        title: string;
      }
      function App() {
        const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
        console.log(data);
      
        return (
          <ul className=" text-5xl font-bold text-violet-400">
            {data?.lessons.map((lesson) => {
              return <li key={lesson.id}>{lesson.title}</li>;
            })}
          </ul>
        );
      } */
