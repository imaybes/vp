import { createAction } from 'redux-actions';
import { connect } from 'react-redux';
import AdminPanel from './components/AdminPanel';

const mapStateToProps = ({ admin }) => ({
  list: admin.get('list'),
  loading: admin.get('loading'),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onInit() {
      const ac0 = createAction('admin/getList');
      dispatch(ac0());
    },
    onAdjudicate(id, willLike) {
      const actcr = createAction('admin/decideColor');
      dispatch(
        actcr({
          id,
          willLike,
        })
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
