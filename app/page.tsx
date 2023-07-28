import { Hero, SearchBar, CustomFilter } from "@/components";
import Image from 'next/image'


export async function getPosts() {
  try {
    const res = await fetch("https://bgwgroup.com.au/sammymas2023/get-prize-list-json.php");
    
    if (!res.ok) {
      throw new Error("Failed to fetch!");
    }
    
    const result = await res.json();
    return result;
  } catch (err) {
    console.log("Failed to fetch!", err);
    throw err; // Re-throw the error to propagate it to the caller
  }
}

export default async function Home() {
  const allCars = await getPosts();
  return (
    <main className="overlow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            {/* <CustomFilter title="fuel" />
            <CustomFilter title="year" /> */}
          </div>
        </div>
      </div>
    </main>
  )
}
