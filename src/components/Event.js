let image = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T110055Z&X-Amz-Expires=86400&X-Amz-Signature=ff25bff5b64af65bf2f82a24e24673350280ad9a4f3374cccdb4df7b6116c8c1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject'



const Event = ({eventDetails, months}) => {
  console.log(eventDetails)
  
  //honestly wasn't completely sure how to display the image gotten from the form previously
  return (
    <div className="eventPage">
      <div><img className="photo"src={image} alt='cake'></img></div>
      <div className="eventTitleWrap"><strong className="eventTitle">{eventDetails.title}</strong></div>
      <div><strong className="hostName">Hosted By <strong>{eventDetails.hostName}</strong></strong></div>
      <div className="date">
        <div className="box"></div><strong className="Date">{eventDetails.date}</strong></div>
      <div><strong className="startTime">{eventDetails.timeStart}</strong></div>
      <div><strong className="endTime">{eventDetails.timeEnd}</strong></div>
      <div><strong className="location">{eventDetails.title}</strong></div>
    </div>
  )
}

export default Event