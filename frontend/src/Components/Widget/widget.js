import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import TextsmsOutlined from '@material-ui/icons/TextsmsOutlined';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import BugReportIcon from '@material-ui/icons/BugReport';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Draggable from 'react-draggable';

// import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
// import SaveIcon from '@material-ui/icons/Save';
// import PrintIcon from '@material-ui/icons/Print';
// import ShareIcon from '@material-ui/icons/Share';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
// import Button from '@material-ui/core/Button';

import useSecureLs from "../Global/useSecureLs";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 30,
    transform: 'translateZ(0px)',
    flexGrow: 1,
    position: 'fixed',
    bottom: 0,
    right: 0
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    fontSize: 40,
  },
}));

const actions = [
  //   { icon: <FileCopyIcon />, name: 'Copy' },
  //   { icon: <SaveIcon />, name: 'Save' },
  //   { icon: <PrintIcon />, name: 'Print' },
  //   { icon: <ShareIcon />, name: 'Share' },
  //   { icon: <FavoriteIcon />, name: 'Like' },
  { icon: <TextsmsOutlined />, name: 'Chat With Us', operation: 'chat' },
  { icon: <BugReportIcon />, name: 'Report a Bug', operation: 'bug' },
  { icon: <LocalOffer />, name: 'Play a Game', operation: 'coupon' },
  { icon: <LiveHelpOutlinedIcon />, name: 'Navigation Help', operation: 'faq' },
];

export default function Widget() {
  const classes = useStyles();

  // const [flag, setFlag] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  // const [pos1, setPos1] = React.useState(0);
  // const [pos2, setPos2] = React.useState(0);
  // const [pos3, setPos3] = React.useState(0);
  // const [pos4, setPos4] = React.useState(0);

  const [id] = useSecureLs("user_id");
  const menuElement = useRef(null);


  //   const [hidden, setHidden] = React.useState(false);
  //   const handleVisibility = () => {
  //     setHidden((prevHidden) => !prevHidden);
  //   };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const closeDragElement = (e) => {
  //   const var1 = useRef(document.onmouseup);
  //   var1.onmouseup = null;
  //   const var2 = useRef(document.onmousemove);
  //   var2.onmousemove =
  // }

  // const dragWidget = (e) => {
  //   setFlag(true);
  //   e.preventDefault();
  //   pos3 = e.clientX;
  //   pos4 = e.clientY;
  //   document.onmouseup = closeDragElement;
  //   document.onmousemove = elementDrag;
  // };

  const handleClick = (e, operation) => {
    e.preventDefault();
    if (operation == "chat") {
      // window.botpressWebChat.sendEvent({ type: 'show' })
      window.open('http://localhost:3001/s/1234', "_blank", "width=500, height=700");
      // window.location.replace(`/bug-reports/${id}`);
    }
    else if (operation == "coupon") {
      // window.botpressWebChat.sendEvent({ type: 'show' })
      window.open('https://play-rock-paper-scissor.netlify.app/', "_blank", "width=700, height=700");
      // window.location.replace(`/bug-reports/${id}`);
    }
    else if (operation == "faq") {
      // window.botpressWebChat.sendEvent({ type: 'show' })
      window.location.replace('https://navigationassistance.netlify.app/');
      // window.location.replace(`/bug-reports/${id}`);
    }
    else if (operation == "bug") {
      window.location.replace(`/bug-reports/${id}`);
    }
    setOpen(false);
  };

  const mouseMoveHandler = (e) => {
    var x = e.clientX,
      y = e.clientY;

    var dragElement = document.getElementsByClassName('test')[0];

    dragElement.style.bottom = y;
    dragElement.style.right = x;
  }
  const mouseUpHandler = (e) => {
    document.getElementsByClassName('test')[0].onmousemove = null;

    document.getElementsByClassName('test')[0].onmouseup = null;
  }

  const mouseDownHandler = (e) => {
    e.preventDefault();
    document.getElementsByClassName('test')[0].onmousemove = mouseMoveHandler;

    document.getElementsByClassName('test')[0].onmouseup = mouseUpHandler;




  }





  useEffect(() => {
    if (!menuElement.current) {
      return;
    }

    var dragElement = document.getElementsByClassName('test')[0];
    document.getElementsByClassName('test')[0].onmousedown = mouseDownHandler;


  });

  return (
    <div className={classes.root}>
      <Draggable
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
      // onStart={this.handleStart}
      // onDrag={this.handleDrag}
      // onStop={this.handleStop}
      >

        <div>
          <div className={`${classes.root} handle`} >
            <SpeedDial
              ref={menuElement}
              ariaLabel="SpeedDial openIcon example"
              className={`${classes.speedDial} test`}
              icon={<SpeedDialIcon openIcon={<EditIcon />} />}
              onClose={handleClose}
              onOpen={handleOpen}
              open={open}
            // onMouseDown={(e) => {dragWidget(e)}}
            >

              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={(e) => { handleClick(e, action.operation) }}
                />
              ))}
            </SpeedDial>
          </div>
        </div>
      </Draggable>
    </div>
  );
}