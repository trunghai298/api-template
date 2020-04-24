import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  RawPlayerHistoryPerGame: def.RawPlayerHistoryPerGameModel;
  RawPlayerHistory: def.RawPlayerHistoryModel;
  TeamsStats: def.TeamsStatsModel;
  Users: def.UsersModel;
  Transfermarkt: def.TransfermarktModel;
  PlayersValueHistory: def.PlayersValueHistoryModel;
  Currency: def.CurrencyModel;
  Association: def.AssociationModel;
  WyscoutTeams: def.WyscoutTeamsModel;
  WyscoutPlayers: def.WyscoutPlayersModel;
  MatchDetail: def.MatchDetailModel;
  PlayersTransfert: def.PlayersTransfertModel;
  Manager: def.ManagerModel;
  Agency: def.AgencyModel;
  PlayersMatchesDetails: def.PlayersMatchesDetailsModel
  TeamMetaData: def.TeamMetaDataModel;
  TeamsTransfermarkt: def.TeamsTransfermarktModel;
  PlayersTransfertsHistory: def.PlayersTransfertsHistoryModel;
  CoachesTeams: def.CoachesTeamsModel;
  PlayersAgents: def.PlayersAgentsModel;
  PlayersBestPosition: def.PlayersBestPositionModel;
}

let isInitialized = false;

export const getModels = (seq: sequelize.Sequelize): ITables => {
  const tables: ITables = {
    // Users friendly
    Users: seq.import(path.join(__dirname, "users")),
    Currency: seq.import(path.join(__dirname, "currency")),
    Association: seq.import(path.join(__dirname, "association")),

    // Third party data
    TeamsTransfermarkt: seq.import(path.join(__dirname, 'teams_tranfersmarkt')),
    TeamsStats: seq.import(path.join(__dirname, 'teams_stats')),
    Transfermarkt: seq.import(path.join(__dirname, 'transfermarkt')),
    PlayersValueHistory: seq.import(path.join(__dirname, 'player_value_history')),
    WyscoutTeams: seq.import(path.join(__dirname, 'wyscout_teams')),
    WyscoutPlayers: seq.import(path.join(__dirname, 'wyscout_players')),
    MatchDetail: seq.import(path.join(__dirname, 'match_detail')),
    PlayersTransfert: seq.import(path.join(__dirname, 'players_transfert')),
    Manager: seq.import(path.join(__dirname, 'manager')),
    Agency: seq.import(path.join(__dirname, 'agency')),
    PlayersMatchesDetails: seq.import(path.join(__dirname, 'players_matches_details')),
    TeamMetaData: seq.import(path.join(__dirname, 'team_meta_data')),
    PlayersTransfertsHistory: seq.import(path.join(__dirname, 'players_transferts_history')),
    CoachesTeams: seq.import(path.join(__dirname, 'coaches_teams')),
    PlayersAgents: seq.import(path.join(__dirname, 'players_agents')),
    PlayersBestPosition: seq.import(path.join(__dirname, 'players_best_position')),

    RawPlayerHistory: seq.import(path.join(__dirname, './raw_players_history')),
    RawPlayerHistoryPerGame: seq.import(path.join(__dirname, './raw_players_history_per_game')),
  };

  if (!isInitialized) {
    isInitialized = true;
  }

  return tables;
};
