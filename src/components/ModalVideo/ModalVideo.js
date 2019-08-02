import React from 'react';
import './ModalVideo.css';
import { FormattedMessage } from 'react-intl';
import '../../../node_modules/video-react/dist/video-react.css';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import YouTube from 'react-youtube';

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
    backgroundColor: '#333',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    outline: 'none',
  },
}));

export default function ModalVideo(props) {
  const { videoId } = props.data;

  const videoOpts = {
    height: window.innerWidth > 960 ? '585' : window.innerWidth / 1.641 - '50',
    width: window.innerWidth > 960 ? '960' : window.innerWidth - '50',
    playerVars: {
      autoplay: 1,
      start: props.data.startVideo ? props.data.startVideo : '0',
    },
  };

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
          <YouTube opts={videoOpts} videoId={videoId} />
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
