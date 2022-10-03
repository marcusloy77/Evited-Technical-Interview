//Event name, Host name, Start and End time/date, Location and Event photo.
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';

const Create = ({createPage}) => {
  return (
    <Form id='create' onSubmit={createPage}>
      <strong className='createTitle'>Create Your Event!</strong>

      <Form.Group className="mb-3">
        <Form.Label>Event Name</Form.Label>
        <Form.Control type="text" name='title' placeholder="Enter event name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Host Name</Form.Label>
        <Form.Control type="text" name='hostName' placeholder="Enter host name" />
      </Form.Group>

      <Form.Group className="mb-3"> 
        <Form.Label>Event Start Date</Form.Label>
        <Form.Control type="Date" name="startDate" placeholder="Date"/>
      </Form.Group>
      <Form.Group className="mb-3"> 
        <Form.Label>Event End Date</Form.Label>
        <Form.Control type="date" name="endDate" placeholder="Date"/>
      </Form.Group>

      <Form.Label>Event Time</Form.Label>
      <InputGroup>
        <Form.Control
          placeholder="e.g. 7:00"
          aria-label="Recipient's username with two button addons"
          name="timeStart"
        />
      </InputGroup>

      <InputGroup>
        <Form.Control
          placeholder="e.g. 16:00"
          aria-label="Recipient's username with two button addons"
          name="timeEnd"
        />
      </InputGroup>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Event Photo</Form.Label>
        <Form.Control type="file" name='photo' />
      </Form.Group>


      <Button className='createBtn' variant="primary" type="submit" form="create" >
      🎉 Next
      </Button>
    </Form>
  );
}

export default Create