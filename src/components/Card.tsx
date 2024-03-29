import Box from '@mui/material/Box';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useFetchImages from '../hooks/useFetchImages';
import { Product } from '../hooks/useFetchRecipes';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Card: React.FC<Product> = ({ item }: { item: Product }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    reFetch();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const { reFetch } = useFetchImages();
  return (
    <div>
      <div className="box" onClick={handleOpen}>
        <h3 className="title">{item.title}</h3>
        <div className="scrolling">{item.title}</div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {item.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {item.title}
              {item.title}
              {item.title}
              {item.title}
              {item.title}
            </Typography>
            <Typography>
              <div className="modal-image">
                <img src={item.image} className="modal-image" />
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
export default Card;

// <Button onClick={handleOpen}>Open modal</Button>
// <Modal
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >
//   <Box sx={style}>
//     <Typography id="modal-modal-title" variant="h6" component="h2">
//       Text in a modal
//     </Typography>
//     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//     </Typography>
//   </Box>
// </Modal>
