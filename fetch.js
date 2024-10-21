// fetch api
//this will returrn a promise
const getToDos = async () => {
  const response = await fetch("todoss.json");
  if (condition) {
    
  }
  const data = await response.json();
  return data;
};

getToDos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log("rejected:", err.message));
