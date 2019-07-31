import React from 'react';
import './ModalVideo.css';
import { FormattedMessage } from 'react-intl';
import { Player } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '85vw',
    backgroundColor: '#e86971',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    outline: 'none',
  },
}));

export default function ModalVideo(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setTimeout(() => setOpen(true), 300);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="ModalVideo" className="ModalVideo">
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper} style={modalStyle}>
          <Player
            playsInline
            poster={props.data.videoSrc}
            src={props.data.video}
            autoPlay
          />
        </div>
      </Modal>
      <Button
        variant="contained"
        className="btn-video"
        type="button"
        onClick={handleOpen}
      >
        <FormattedMessage id="videoButton" />
      </Button>
    </div>
  );
}

ModalVideo.propTypes = {
  data: PropTypes.object.isRequired,
};
