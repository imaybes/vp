import React from 'react';
import { Button, Icon } from 'antd';
import classnames from 'classnames';
import style from './style.less';
import ColorRow from './components/ColorRow';
import Immutable from 'immutable';



class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  shouldComponentUpdate(nextProps, nextState){
    let me = this;
    return !Immutable.is(me.props.boxInfo, nextProps.boxInfo);
  }
  onClickHander(a,b,c,d){
    let me = this;
    me.props.onLikeClick({
      current: me.props.boxInfo.get('hasLike') || false,
      id: me.props.boxInfo.get('id')
    });
  }

  render() {
    let me = this;
    let likeStyle = {};
    likeStyle[style.hasLike] = me.props.boxInfo.get('hasLike') || false;

    return <div className={style.box}>
        <div className={style.boxCanvas}>
          {me.props.boxInfo.get('value').split(',').map((v, k) => {
            return <ColorRow key={k} rowColor={v} />
          })}
        </div>

        <div className={style.boxFooter}>
          <Button type="default" onClick={me.onClickHander.bind(me)}>
            <h3 style={{display: 'inline'}}>
              <Icon type="heart" className={likeStyle}/>
              &nbsp;&nbsp;
              {me.props.boxInfo.get('like')}
            </h3>
          </Button>

          {
            me.props.boxInfo.get('author') ?
              <h3>Zijian Guo</h3> : null
          }

        </div>
    </div>;
  }
}

export default Product;