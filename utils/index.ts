export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'f576873d93msha5d0eae54237d66p1c958fjsnb8b661cb5d25',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com' }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers
  });

  const result = await response.json();
  return result;
}