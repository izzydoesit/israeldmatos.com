import { connect } from 'react-redux';

import Projects from './Projects';
import { updateModal } from '../actions/modal-actions';

const mapStateToProps = ({ modal }) => {
  return {
    project: modal.currentProject,
  };
};

const mapDispatchToProps = dispatch => ({
  updateCurrentProject(id) {
    dispatch(updateCurrentProject(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)();
