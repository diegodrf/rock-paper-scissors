import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const rules = require('../assets/images/image-rules.svg');

const RulesModal = ({ hideModal, show }: any) => {
  const classes = 'modal fade ' + (show ? 'show' : null);

  return (
    <div className={classes} tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
        <div className="modal-content px-4 py-5 py-sm-4">
          <div className="modal-title">
            <h1 className="mb-0">Rules</h1>
            <button className="btn close d-none d-sm-block" onClick={hideModal}>
              <FontAwesomeIcon icon={faXmark} size="xl" />
            </button>
          </div>
          <div className="modal-body mt-5">
            <img src={rules} alt="rules" />
          </div>
          <button className="btn close d-sm-none" onClick={hideModal}>
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

class Rules extends Component {
  state = { showModal: false };

  toggleRules = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <div className="row mt-5">
          <div className="col text-center">
            <button className="btn btn-outline-light rules float-lg-end" onClick={this.toggleRules}>
              RULES
            </button>
          </div>
        </div>
        <RulesModal show={showModal} hideModal={this.toggleRules} />
      </div>
    )
  }
}

export default Rules;