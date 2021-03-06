import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import Card from "./Card";

class ResponsiveList extends React.Component {
  showResponsible(yn) {
    const uniqKeyGen = yn?"left":"right";
    // console.log(this.props.itemList);
    return (
      <div className={yn ? "ResponsiveList" : "justList"}>
        {yn ? "" : <div className={"titleList"}>Сomplete list of elements</div>}
        {this.props.itemList.map((item, index) => {
          return (
            <Card key={"responsiveListItem" + index} itemData = {item}  uniqKey={uniqKeyGen}
                  deleteElement={this.props.CRUD.delete} updateElement={this.props.CRUD.update}/>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className={""}>
        {this.showResponsible(this.props.isResponsible)}
      </div>
    )
  }
}

ResponsiveList.propTypes = {
  itemList: PropTypes.array.isRequired,
  isResponsible: PropTypes.bool,
  CRUD : PropTypes.object.isRequired
};

export default ResponsiveList;