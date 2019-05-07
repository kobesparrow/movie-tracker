const fetchAll = (url) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Response is not okay');
      } 
      return response.json();
    })
}

export { fetchAll }