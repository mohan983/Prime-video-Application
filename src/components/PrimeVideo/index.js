// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        className="prime-video-image"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="movies-category">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
        <h1 className="movies-category">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
