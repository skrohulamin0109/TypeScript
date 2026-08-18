//axios is like fetch

// import axios, {AxiosResponse} from 'axios' // AxiosResposne is a datatype
import axios from "axios"; // importing functionality
import type { AxiosResponse } from "axios";// explicitly saying I'm getting only the declaration from .d.ts file // importing type

// defining interface or structure for fetched data. the most done job in typescript
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchData = async () => {
  try {
    const response: AxiosResponse<Post> = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    console.log('Post', response.data)
  } catch (error: any) {
    if(axios.isAxiosError(error)){
      console.log('Axios Error', error.message)
      if(error.response){
        console.log(error.response.status)
      }
    }
  }
}

// usually the types for a library are already declared so if you just do npm i some-library, this is fine

// but if not types not declared for some library, you just do this. after installing the library, you do npm i -D @types/some-library // types are dev-dependencies.

// if we still don't get the types , then we declare our own types in .d.ts file with the help of the documentation of that specific library or repository.  in some-library.d.ts // and we just copy paste the types that the repository has provided us with.



// this is a face data from jsonplaceholder to easily write the structure of the data in our interface.
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

