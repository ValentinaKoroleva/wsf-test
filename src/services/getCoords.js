function getCoords(props){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const urlCoords = props.url

  useEffect(() => {
    fetch(urlCoords)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [urlCoords])

  let result = {
    latitude:33.44,
    longtitude:-94.04,
    message: 'ok' | error.message
  };
  console.log(items)
  return result;
}
export default getCoords;