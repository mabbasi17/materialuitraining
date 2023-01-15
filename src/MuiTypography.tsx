import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non minus
        eum vero, laudantium voluptatum, quo iste veritatis repellat provident
        illum consequatur libero, deserunt ea totam sequi omnis numquam
        similique.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae
        vitae necessitatibus ducimus dicta odit delectus est sint amet
        architecto eaque saepe, quia impedit quaerat reprehenderit vero enim.
        Obcaecati, perferendis.
      </Typography>

      <Typography variant="h6" component="p">
        H6 Heading
      </Typography>

      <Typography variant="h4" gutterBottom>
        H4 Heading
      </Typography>
    </div>
  )
}
