const element = (
  <div className='background-page'>
    <h1 className='main-heading'>Congratulations!</h1>
    <div class='card-container-profile'>
      <div class='profile-card'>
        <img
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
          class='profile'
        />
        <h1>Kiran V</h1>
        <p class='about-person'>
          Vishnu Institute of Education and Technology, Bhimavaram
        </p>
        <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
