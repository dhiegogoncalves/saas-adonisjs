import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MembersActions from '../../store/ducks/members';

import Modal from '../Modal';
import Button from '../../styles/components/button';

import { MembersList } from './styles';

class Members extends Component {
  render() {
    const { closeMembersModal } = this.props;

    return (
      <Modal>
        <h1>Membros</h1>

        <form>
          <MembersList>
            <li>
              <strong>Teste</strong>
            </li>
          </MembersList>

          <Button
            type="button"
            filled={false}
            color="gray"
            onClick={closeMembersModal}
          >
            Cancelar
          </Button>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MembersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members);
