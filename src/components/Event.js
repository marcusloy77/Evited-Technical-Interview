const Event = ({eventDetails}) => {
  console.log(eventDetails)
  //honestly wasn't completely sure how to display the image gotten from the form previously
  return (
    <div>
      <div><img className="photo"src={eventDetails.photo} alt='event'></img></div>
      <div><strong className="eventTitle">{eventDetails.title}</strong></div>
      <div><strong className="hostName">{eventDetails.hostName}</strong></div>
      <div><strong className="Date">{eventDetails.date}</strong></div>
      <div><strong className="startTime">{eventDetails.timeStart}</strong></div>
      <div><strong className="endTime">{eventDetails.timeEnd}</strong></div>
      <div><strong className="location">{eventDetails.title}</strong></div>
    </div>
  )
}

export default Event