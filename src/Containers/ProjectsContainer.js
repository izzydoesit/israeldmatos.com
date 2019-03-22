import { connect } from 'react-redux';

import Projects from './Projects';
import { updateModal } from '../actions/modal-actions';
import { updateActiveIndex } from '../actions/card-actions';

const mapStateToProps = ({ modal }) => {
  return {
    activeIndex: modal.activeIndex,
    project: modal.currentProject,
  };
};

const mapDispatchToProps = dispatch => ({
  updateActiveIndex(index) {
    dispatch(updateActiveIndex(index))
  },

  updateCurrentProject(id) {
    dispatch(updateModal(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)();
