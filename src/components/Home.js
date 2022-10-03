const Home = ({Button, Link, landingImage, createEvent}) => {
  return (
    <div>
      <div className='heading-text'>
        <div className='heading'>
            <div className='title1'><strong>Imagine if</strong></div><div><strong className='snapchat'>Snapchat</strong></div><div><strong className='title2'>had events.</strong></div>
          </div>
            <p className='text'>Easily host and share events with your friends across any social media</p>
        </div>
        <div>
          <img className='landingImage' src={landingImage} alt="movie night event example" /></div>
          <Button onClick={createEvent} className='createBtn'>🎉 Create my event</Button>
      </div>
      

  )
}

export default Home