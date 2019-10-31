import React from 'react';
import { Form, Input, Image, TextArea, Button, Message, Header, Icon} from 'semantic-ui-react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl'

const INITIAL_PRODUCT = {
  name: "",
  price:"",
  media:" ",
  descripition: "" 
}

function CreateProduct() {
  const [product, setProduct] = React.useState(INITIAL_PRODUCT);
  const [mediaPreview, setMediaPreview] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  function handleChange(event) {
    const{  name, value, files } = event.target;
    if(name === 'media'){
      setProduct(prevState => ({...prevState, media: files[0] }));
      setMediaPreview(window.URL.createObjectURL(files[0]));
    } else {

    setProduct(prevState => ({ ...prevState, [name]: value}));
  }
}
async function handleImageUpload() {
  const data = new FormData()
  data.append('file', product.media)
  data.append('drll6nq6j', 'reedbargercodes')
  const response = await axios.post(process.env.CLOUDINARY_URL, data)
  const mediaUrl = response.data.url
  return mediaUrl;
}

async function handleSubmit(event) {
  event.preventDefault();
  const mediaUrl = await handleImageUpload();
  const url = `${baseUrl}/api/product`
  const payload = { ...product, mediaUrl };
  await axios.post(url, payload);
  setProduct(INITIAL_PRODUCT)
  setSuccess(true)
}
  return (
  <>
    <Header as="h2" block>
      <Icon name="add" color="orange"/>
      Create New Product </Header>
      <Form success={success} onSubmit={handleSubmit}>
        <Message success icon="check" header="success!" content="Your Content has been posted"/>
        <Form.Group width="equal">
          <Form.Field control={Input}
          name="name"
          label="Name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
          />
          <Form.Field control={Input}
          name="price"
          label="Price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          min="0.00"
          step="0.01"
          type="number"
          />
          <Form.Field control={Input}
          control={Input}
          name="media"
          type="file"
          label="Media"
          accept="image/*"
          placeholder="Media"
          onChange={handleChange}
          /> 
        </Form.Group>
        <Image src={mediaPreview} rounded centered size="small"/>
        <Form.Field
          control={TextArea}
          name="description"
          label="Description"
          placeholder="Description"
          onChange={handleChange}
          value={product.description}
       />
       <Form.Field
          control={Button}
          color="blue"
          icon="pencil alternate"
          content="Submit"
          type="submit"
        />
      </Form>
  </>
  )
}

export default CreateProduct;
