import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TeamsActions from '../../store/ducks/teams';

import Button from '../../styles/components/button';
import Modal from '../../components/Modal';

import { Container, TeamList, Team, NewTeam } from './styles';

class TeamSwitcher extends Component {
  static propTypes = {
    getTeamsRequest: PropTypes.func.isRequired,
    selectTeam: PropTypes.func.isRequired,
    openTeamModal: PropTypes.func.isRequired,
    closeTeamModal: PropTypes.func.isRequired,
    createTeamRequest: PropTypes.func.isRequired,
    teams: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string
        })
      )
    })
  };

  state = {
    newTeam: ''
  };

  componentDidMount() {
    const { getTeamsRequest } = this.props;
    getTeamsRequest();
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleTeamSelect = team => {
    const { selectTeam } = this.props;
    selectTeam(team);
  };

  handleCreateTeam = e => {
    e.preventDefault();

    const { createTeamRequest } = this.props;
    const { newTeam } = this.state;

    createTeamRequest(newTeam);
  };

  render() {
    const { newTeam } = this.state;
    const { teams, openTeamModal, closeTeamModal } = this.props;

    return (
      <Container>
        <TeamList>
          {teams.data.map(team => (
            <Team
              type="button"
              key={team.id}
              onClick={() => this.handleTeamSelect(team)}
            >
              <img
                alt={team.name}
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
              />
            </Team>
          ))}

          <NewTeam onClick={openTeamModal}>NOVO</NewTeam>

          {teams.teamModalOpen && (
            <Modal>
              <h1>Criar time</h1>
              <form onSubmit={this.handleCreateTeam}>
                <span>NOME</span>
                <input
                  type="text"
                  name="newTeam"
                  value={newTeam}
                  onChange={this.handleInputChange}
                />

                <Button type="submit" size="big">
                  Salvar
                </Button>
                <Button
                  type="button"
                  size="small"
                  color="gray"
                  onClick={closeTeamModal}
                >
                  Cancelar
                </Button>
              </form>
            </Modal>
          )}
        </TeamList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.teams
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TeamsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamSwitcher);
