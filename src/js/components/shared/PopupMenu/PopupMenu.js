import React, { Component, PropTypes } from 'react';
import { ContextMenu, MenuItem, ContextMenuLayer } from "react-contextmenu";
import './PopupMenu.scss';

class PopupMenu extends Component {
  render() {
    const { menu, children, data } = this.props;
    const { id, entries, handleClick } = menu;
    const Container = ContextMenuLayer(id, props => props)(props =>
      props.children);

    return (
      <span>
        <Container renderTag="span" >{children}</Container>
        <ContextMenu identifier={id}>
          {entries.map((entry, index) =>
            <MenuItem
              key={index}
              onClick={handleClick}
              data={{key: entry.key, content: data}}>
              {entry.label}
            </MenuItem>)}
        </ContextMenu>
      </span>
    );
  }
}

PopupMenu.defaultProps = {
};

PopupMenu.propTypes = {
  menu: PropTypes.object.isRequired,
  data: PropTypes.object,
  children: PropTypes.element.isRequired
};

export default PopupMenu;
