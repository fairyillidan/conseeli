   function fetchData() {
       return new Promise((resolve, reject) => {
           // Simulating an asynchronous operation (e.g., fetching data)
           setTimeout(() => {
               const data = { id: 1, name: 'John Doe' };
               resolve(data); // Resolving the promise with data
           }, 2000); // Simulating delay of 2 seconds
       });
   }

   fetchData().then(data => {
       console.log('Data fetched:', data);
   });
   