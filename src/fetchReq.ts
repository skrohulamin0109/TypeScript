interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


// without axios data fetching // we don't get that many extra types with fetch only, axios is far better.
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if(!response.ok){
      throw new Error(`HTTP error ${response.status}`)
    }

    const data: Post = await response.json()
   
  } catch (error: any) {
   
  }
}

// always install the libraries and their types.