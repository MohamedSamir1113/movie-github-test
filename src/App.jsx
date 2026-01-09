import { useEffect, useState } from 'react'
import Search from "./components/Search"
import axios from 'axios'
import { MovieCard } from './components/MovieCard'

function App() {
  const API_Base_URL = "https://api.themoviedb.org/3"
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`
    }
  }
  
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setloading] = useState(false)
  const [errMessage, setErrMessage] = useState(false)
  const [movies, setMovies] = useState([])

  async function getMovies() {
    setloading(true)
    try {
      const res = await axios.get(`${API_Base_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, API_OPTIONS)
      console.log(res.data.results);
      if (!res.status == 200)
        throw new Error("failed to fetch movies")

      if (res.Response == false)
        setErrMessage("Failed To Fetch movies")

      let data = res.data.results
      setMovies(data)
    }

    catch (error) {
      console.log(error);
      setErrMessage("Error Fetching Movies")

    }
    finally {
      setloading(false)
    }


  }

  useEffect(function () {
    getMovies()
  }, [])
  return (
    <>
      <main>
        <div className='pattern' />

        <div className="wrapper">
          <header>
            <img src="/hero.png" alt="" />
            <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
          </header>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <section className='all-movies'>
            <h2 className='text-center mt-5'>All movies</h2>
            {
              loading ? (<p className='text-white'>loading...</p>) :
                errMessage ?
                  (<><p className='text-red-500'>{errMessage}</p></>) :
                  (
                  <ul>
                    {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                  </ul>
                  )
            }
          </section>
        </div>
      </main>
    </>
  )
}

export default App
