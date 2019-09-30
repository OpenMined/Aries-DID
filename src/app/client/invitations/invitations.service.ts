import { Connection } from '../../agent/modules/connection/connection.model';
import { IInvitation } from '../../core/interfaces/invitation-request.interface';
import { invitationValid } from './invitations-validators';
import { IConnectionParams } from '../../core/interfaces/connection.interface';
import AgentConfig from '../../config';

export class InvitationService {
  _connection: Connection;
  constructor() {
    const agentConfig = new AgentConfig();
    this._connection = new Connection(agentConfig.apiUrl);
  }
  async createInvitation() {
    try {
      const res = await this._connection.createInvitation();
      return res;
    } catch (err) {
      return err;
    }
  }

  async getInvitations(params?: IConnectionParams) {
    try {
      const res = await this._connection.getConnections(params);
      return res;
    } catch (err) {
      return err;
    }
  }

  async acceptInvitation(invite: IInvitation) {
    if (!invitationValid(invite)) throw new Error('invalid invitation');
    try {
      const res = await this._connection.invitationResponse(invite);
      return res;
    } catch (err) {
      return err;
    }
  }
}