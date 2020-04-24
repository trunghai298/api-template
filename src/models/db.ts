import * as Sequelize from 'sequelize';

interface PlayerPhysicalStats {
  age: number;
  height: number;
  weight: number;
}

interface PlayerDurationStats {
  minsPlayed: number;
  apps: number;
  nbMatches: number;
}

interface PlayerStrategyStats {
  playedPositions: string;
}

export interface PlayersBestPositionAttribute {
  playerId?: number;
  matchesPlayed?: number;
  position?: string;
}

interface PlayerMatchStats {
  duelAerialLost: number;
  duelAerialTotal: number;
  duelAerialWon: number;
  passCrossBlockedDefensive: number;
  outfielderBlockedPass: number;
  outfielderBlock: number;
  yellowCard: number;
  redCard: number;
  clearanceTotal: number;
  dribbleLost: number;
  dribbleTotal: number;
  dribbleWon: number;
  foulGiven: number;
  foulCommitted: number;
  goalTotal: number;
  goalSixYardBox: number;
  goalPenaltyArea: number;
  goalObox: number;
  goalOpenPlay: number;
  goalCounter: number;
  goalSetPiece: number;
  goalLeftFoot: number;
  goalRightFoot: number;
  penaltyScored: number;
  penaltyTaken: number;
  interceptionAll: number;
  keyPassesTotal: number;
  offsideGiven: number;
  offsideWonPerGame: number;
  passTotal: number;
  passLongBallAccurate: number;
  passLongBallInaccurate: number;
  shortPassAccurate: number;
  shortPassInaccurate: number;
  passCornerAccurate: number;
  passCornerInaccurate: number;
  passFreekickAccurate: number;
  passFreekickInaccurate: number;
  passCrossInaccurate: number;
  passCrossAccurate: number;
  turnover: number;
  dispossessed: number;
  saveSixYardBox: number;
  savePenaltyArea: number;
  saveObox: number;
  saveTotal: number;
  shotOnTarget: number;
  shotOffTarget: number;
  shotOnPost: number;
  shotBlocked: number;
  shotsTotal: number;
  shotOpenPlay: number;
  shotPenaltyArea: number;
  shotSixYardBox: number;
  shotOboxTotal: number;
  shotCounter: number;
  shotRightFoot: number;
  shotLeftFoot: number;
  shotHead: number;
  shotObp: number;
  tackleWonTotal: number;
  tackleTotalAttempted: number;
  challengeLost: number;
  assistTotal: number;
  assistCross: number;
  assistCorner: number;
  assistThroughball: number;
  assistFreekick: number;
  assistThrowin: number;
  assistOther: number;
  assist: number;
  isManOfTheMatch: number;
  subOn: number;
  manOfTheMatch: number;
  isOpta: number;
  keyPassPerGame: number;
  keyPassCross: number;
  keyPassCorner: number;
  keyPassThroughball: number;
  keyPassFreekick: number;
  keyPassThrowin: number;
  keyPassOther: number;
  passSuccess: number;
  dribbleWonPerGame: number;
  foulGivenPerGame: number;
  offsideGivenPerGame: number;
  dispossessedPerGame: number;
  turnoverPerGame: number;
  tacklePerGame: number;
  interceptionPerGame: number;
  foulsPerGame: number;
  clearancePerGame: number;
  wasDribbledPerGame: number;
  outfielderBlockPerGame: number;
  goalOwn: number;
  totalPassesPerGame: number;
  accurateCrossesPerGame: number;
  accurateLongPassPerGame: number;
  accurateThroughBallPerGame: number;
  stageId: number;
  transfermarktId: number;
}

export interface UsersAttribute {
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  status?: string;
  teamId?: number;
  contractNumber?: number;
  contractExpDate?: string;
  isAdmin?: boolean;
}

export interface TeamMetaDataAttribute {
  id?: number;
  teamId: number;
  presidentName: string;
  coachName: string;
  teamLogo: string;
  foundationDate: string;
  listTrophy: string;
}

export interface PlayerAttribute {
  firstName: string;
  lastName: string;
  name: string;
  playerId: number;
}

export interface TeamAttribute {
  teamId: number;
  teamName: number;
}

export interface SeasonAttribute {
  seasonId: number;
  seasonName: number;
}

export interface TournamentAttribute {
  tournamentId: number;
  tournamentName: number;
  tournamentShortName: number;
  tournamentRegionId: number;
  tournamentRegionCode: number;
  tournamentRegionName: number;
  regionCode: number;
}

export interface RawPlayerHistoryAttribute
  extends
  PlayerPhysicalStats, PlayerDurationStats, PlayerStrategyStats, PlayerAttribute, TeamAttribute,
  PlayerMatchStats, SeasonAttribute, TournamentAttribute {
  id?: number;
}

export interface RawPlayerHistoryPerGameAttribute extends RawPlayerHistoryAttribute { }

export interface TransfermarktAttribute {
  playerId: number;
  name: string;
  url: string;
  age: string;
  nationality: string;
  position: string;
  teamName: string;
  value: string;
  values: string;
  height: number;
  listTrophy: string;
  endDateContract: string
}

export interface PlayersValueHistoryAttribute {
  id: string,
  playerId: string,
  value: number,
  date: string,
  currency: string,
  value_usd: number,
  teamName: string,
  teamId: number
}

export interface CurrencyAttribute {
  id: number;
  date: string;
  payload: string;
}

export interface TeamsStatsAttribute {
  season: number;
  seasonId: number;
  teamId: number;
  teamName: string;
  rank: number;
  gamePlayed: number;
  win: number;
  draw: number;
  loss: number;
  goalFor: number;
  goalAgainst: number;
  goalDifference: number;
  points: number;
}

export interface AssociationAttribute {
  id: number,
  playerIdWhoscored: string,
  playerIdTransfermarkt: string
}

export interface WyscoutTeamsAttribute {
  id: number,
  teamId: number,
  matches: number,
  cleanSheets: number,
  offsides: number,
  offsideWonPerGame: number,
  successfulDefensiveActions: number,
  xgShotAgainst: number,
  ppda: number,
  matchesTagged: number,
  goals: number,
  assists: number,
  shots: number,
  headShots: number,
  yellowCards: number,
  redCards: number,
  directRedCards: number,
  penalties: number,
  linkupPlays: number,
  duels: number,
  duelsWon: number,
  defensiveDuels: number,
  defensiveDuelsWon: number,
  offensiveDuels: number,
  offensiveDuelsWon: number,
  aerialDuels: number,
  aerialDuelsWon: number,
  fouls: number,
  passes: number,
  successfulPasses: number,
  smartPasses: number,
  successfulSmartPasses: number,
  passesToFinalThird: number,
  successfulPassesToFinalThird: number,
  crosses: number,
  successfulCrosses: number,
  forwardPasses: number,
  successfulForwardPasses: number,
  backPasses: number,
  successfulBackPasses: number,
  throughPasses: number,
  successfulThroughPasses: number,
  keyPasses: number,
  successfulKeyPasses: number,
  verticalPasses: number,
  successfulVerticalPasses: number,
  longPasses: number,
  successfulLongPasses: number,
  dribbles: number,
  successfulDribbles: number,
  interceptions: number,
  defensiveActions: number,
  successfulDefensiveAction: number,
  attackingActions: number,
  successfulAttackingActions: number,
  freeKicks: number,
  freeKicksOnTarget: number,
  directFreeKicks: number,
  directFreeKicksOnTarget: number,
  corners: number,
  successfulPenalties: number,
  successfulLinkupPlays: number,
  accelerations: number,
  pressingDuels: number,
  pressingDuelsWon: number,
  looseBallDuels: number,
  looseBallDuelsWon: number,
  missedBalls: number,
  shotAssists: number,
  shotOnTargetAssists: number,
  recoveries: number,
  opponentHalfRecoveries: number,
  dangerousOpponentHalfRecoveries: number,
  losses: number,
  ownHalfLosses: number,
  dangerousOwnHalfLosses: number,
  xgShot: number,
  xgAssist: number,
  xgSave: number,
  receivedPass: number,
  touchInBox: number,
  progressiveRun: number,
  fieldAerialDuels: number,
  fieldAerialDuelsWon: number,
  gkCleanSheets: number,
  gkConcededGoals: number,
  gkShotsAgainst: number,
  gkExits: number,
  gkSuccessfulExits: number,
  gkAerialDuels: number,
  gkAerialDuelsWon: number,
  gkSaves: number,
  newDuelsWon: number,
  newDefensiveDuelsWon: number,
  newOffensiveDuelsWon: number,
  newSuccessfulDribbles: number,
  lateralPasses: number,
  successfulLateralPasses: number
}

export interface WyscoutPlayersAttribute {
  id: number,
  playerId: number,
  competitionId: number,
  seasonId: number,
  position: string,
  firstName: string,
  lastName: string,
  currentTeamId: number,
  matches: number,
  matchesInStart: number,
  matchesSubstituted: number,
  matchesComingOff: number,
  minutesOnField: number,
  minutesTagged: number,
  goals: number,
  assists: number,
  shots: number,
  headShots: number,
  yellowCards: number,
  redCards: number,
  directRedCards: number,
  penalties: number,
  linkupPlays: number,
  duels: number,
  duelsWon: number,
  defensiveDuels: number,
  defensiveDuelsWon: number,
  offensiveDuels: number,
  offensiveDuelsWon: number,
  aerialDuels: number,
  aerialDuelsWon: number,
  fouls: number,
  passes: number,
  successfulPasses: number,
  smartPasses: number,
  successfulSmartPasses: number,
  passesToFinalThird: number,
  successfulPassesToFinalThird: number,
  crosses: number,
  successfulCrosses: number,
  forwardPasses: number,
  successfulForwardPasses: number,
  backPasses: number,
  successfulBackPasses: number,
  throughPasses: number,
  successfulThroughPasses: number,
  keyPasses: number,
  successfulKeyPasses: number,
  verticalPasses: number,
  successfulVerticalPasses: number,
  longPasses: number,
  successfulLongPasses: number,
  dribbles: number,
  successfulDribbles: number,
  interceptions: number,
  defensiveActions: number,
  successfulDefensiveAction: number,
  attackingActions: number,
  successfulAttackingActions: number,
  freeKicks: number,
  freeKicksOnTarget: number,
  directFreeKicks: number,
  directFreeKicksOnTarget: number,
  corners: number,
  successfulPenalties: number,
  successfulLinkupPlays: number,
  accelerations: number,
  pressingDuels: number,
  pressingDuelsWon: number,
  looseBallDuels: number,
  looseBallDuelsWon: number,
  missedBalls: number,
  shotAssists: number,
  shotOnTargetAssists: number,
  recoveries: number,
  opponentHalfRecoveries: number,
  dangerousOpponentHalfRecoveries: number,
  losses: number,
  ownHalfLosses: number,
  dangerousOwnHalfLosses: number,
  xgShot: number,
  xgAssist: number,
  xgSave: number,
  receivedPass: number,
  touchInBox: number,
  progressiveRun: number,
  fieldAerialDuels: number,
  fieldAerialDuelsWon: number,
  gkCleanSheets: number,
  gkConcededGoals: number,
  gkShotsAgainst: number,
  gkExits: number,
  gkSuccessfulExits: number,
  gkAerialDuels: number,
  gkAerialDuelsWon: number,
  gkSaves: number,
  newDuelsWon: number,
  newDefensiveDuelsWon: number,
  newOffensiveDuelsWon: number,
  newSuccessfulDribbles: number,
  lateralPasses: number,
  successfulLateralPasses: number
}

export interface MatchDetailAttribute {
  id?: number,
  filename: string;
  homeTeam: string,
  awayTeam: string,
  homeTeamId: number,
  awayTeamId: number,
  homeScore: number,
  awayScore: number,
  date: Date,
  matchDay: number,
  homeStartLineUp: string,
  awayStartLineUp: string,
  homeManager: string,
  awayManager: string,
  tournamentName: string,
  seasonName: string,
  listSubstituteHome: string,
  listSubstituteAway: string,
  listPlayerHome: string,
  listPlayerAway: string,
  listGoalHome: string,
  listGoalAway: string
}

export interface PlayersTransfertAttribute {
  id: number,
  name: string,
  playerId: number,
  nationality: string,
  birthday: string,
  height: number,
  image: string,
  transfers: string,
  listTrophy: string
}

export interface TeamsTransfermarktAttribute {
  id: number,
  name: string,
  whoscoredTeamId: number,
  transfermarktTeamId: number,
  listTrophy: string
}

export interface ManagerAttribute {
  id: number,
  managerId: number,
  name: string,
  image: string,
  birthday: string,
  nationality: string,
  isRetired: boolean,
  startContract: string,
  endContract: string,
  listClubs: string
}

export interface AgencyAttribute {
  id: number,
  name: string,
  listPlayer: string
}

export interface PlayersMatchesDetailsAttribute {
  id: number,
  playerId: number,
  teamId: number,
  tournamentId: number,
  whoscoredTournamentId: number,
  seasonName: string,
  matchId: number,
  isSubstitute: boolean,
  isHome: boolean,
  position: string,
  positionLong: string,
  isInjured: boolean
}

export interface PlayersTransfertsHistoryAttribute {
  id: number,
  playerId: number,
  playerName: string,
  season: string,
  date: string,
  marketValue: string,
  fee: string,
  marketValueUsd: number,
  feeUsd: number,
  left: string,
  join: string
}

export interface CoachesTeamsAttribute {
  id: number,
  coachName: string,
  teamName: string,
  teamId: number,
  coachId: number
}

export interface PlayersAgentsAttribute {
  id: number,
  playerId: number,
  agentId: number
}

export interface PlayersBestPositionInstance extends Sequelize.Instance<PlayersBestPositionAttribute>, PlayersBestPositionAttribute { }
export interface PlayersBestPositionModel extends Sequelize.Model<PlayersBestPositionInstance, PlayersBestPositionAttribute> { }

export interface TeamsStatsInstance extends Sequelize.Instance<TeamsStatsAttribute>, TeamsStatsAttribute { }
export interface TeamsStatsModel extends Sequelize.Model<TeamsStatsInstance, TeamsStatsAttribute> { }

export interface TeamsTransfermarktInstance extends Sequelize.Instance<TeamsTransfermarktAttribute>, TeamsTransfermarktAttribute { }
export interface TeamsTransfermarktModel extends Sequelize.Model<TeamsTransfermarktInstance, TeamsTransfermarktAttribute> { }

export interface TeamMetaDataInstance extends Sequelize.Instance<TeamMetaDataAttribute>, TeamMetaDataAttribute { }
export interface TeamMetaDataModel extends Sequelize.Model<TeamMetaDataInstance, TeamMetaDataAttribute> { }

export interface UsersInstance extends Sequelize.Instance<UsersAttribute>, UsersAttribute { }
export interface UsersModel extends Sequelize.Model<UsersInstance, UsersAttribute> { }

export interface TransfermarktInstance extends Sequelize.Instance<TransfermarktAttribute>, TransfermarktAttribute { }
export interface TransfermarktModel extends Sequelize.Model<TransfermarktInstance, TransfermarktAttribute> { }

export interface AssociationInstance extends Sequelize.Instance<AssociationAttribute>, AssociationAttribute { }
export interface AssociationModel extends Sequelize.Model<AssociationInstance, AssociationAttribute> { }

export interface WyscoutTeamsInstance extends Sequelize.Instance<WyscoutTeamsAttribute>, WyscoutTeamsAttribute { }
export interface WyscoutTeamsModel extends Sequelize.Model<WyscoutTeamsInstance, WyscoutTeamsAttribute> { }

export interface WyscoutPlayersInstance extends Sequelize.Instance<WyscoutPlayersAttribute>, WyscoutPlayersAttribute { }
export interface WyscoutPlayersModel extends Sequelize.Model<WyscoutPlayersInstance, WyscoutPlayersAttribute> { }

export interface MatchDetailInstance extends Sequelize.Instance<MatchDetailAttribute>, MatchDetailAttribute { }
export interface MatchDetailModel extends Sequelize.Model<MatchDetailInstance, MatchDetailAttribute> { }

export interface PlayersTransfertInstance extends Sequelize.Instance<PlayersTransfertAttribute>, PlayersTransfertAttribute { }
export interface PlayersTransfertModel extends Sequelize.Model<PlayersTransfertInstance, PlayersTransfertAttribute> { }

export interface ManagerInstance extends Sequelize.Instance<ManagerAttribute>, ManagerAttribute { }
export interface ManagerModel extends Sequelize.Model<ManagerInstance, ManagerAttribute> { }

export interface AgencyInstance extends Sequelize.Instance<AgencyAttribute>, AgencyAttribute { }
export interface AgencyModel extends Sequelize.Model<AgencyInstance, AgencyAttribute> { }

export interface PlayersMatchesDetailsInstance extends Sequelize.Instance<PlayersMatchesDetailsAttribute>, PlayersMatchesDetailsAttribute { }
export interface PlayersMatchesDetailsModel extends Sequelize.Model<PlayersMatchesDetailsInstance, PlayersMatchesDetailsAttribute> { }

export interface PlayersTransfertsHistoryInstance extends Sequelize.Instance<PlayersTransfertsHistoryAttribute>, PlayersTransfertsHistoryAttribute { }
export interface PlayersTransfertsHistoryModel extends Sequelize.Model<PlayersTransfertsHistoryInstance, PlayersTransfertsHistoryAttribute> { }

export interface CoachesTeamsInstance extends Sequelize.Instance<CoachesTeamsAttribute>, CoachesTeamsAttribute { }
export interface CoachesTeamsModel extends Sequelize.Model<CoachesTeamsInstance, CoachesTeamsAttribute> { }

export interface PlayersAgentsInstance extends Sequelize.Instance<PlayersAgentsAttribute>, PlayersAgentsAttribute { }
export interface PlayersAgentsModel extends Sequelize.Model<PlayersAgentsInstance, PlayersAgentsAttribute> { }

export interface PlayersValueHistoryInstance
  extends Sequelize.Instance<PlayersValueHistoryAttribute>,
  PlayersValueHistoryAttribute { }
export interface PlayersValueHistoryModel
  extends Sequelize.Model<PlayersValueHistoryInstance, PlayersValueHistoryAttribute> { }

export interface CurrencyInstance extends Sequelize.Instance<CurrencyAttribute>, CurrencyAttribute { }
export interface CurrencyModel extends Sequelize.Model<CurrencyInstance, CurrencyAttribute> { }

export interface RawPlayerHistoryPerGameInstance
  extends Sequelize.Instance<RawPlayerHistoryPerGameAttribute>,
  RawPlayerHistoryPerGameAttribute { }
export interface RawPlayerHistoryPerGameModel
  extends Sequelize.Model<RawPlayerHistoryPerGameInstance, RawPlayerHistoryPerGameAttribute> { }

export interface RawPlayerHistoryInstance
  extends Sequelize.Instance<RawPlayerHistoryAttribute>,
  RawPlayerHistoryAttribute { }
export interface RawPlayerHistoryModel extends Sequelize.Model<RawPlayerHistoryInstance, RawPlayerHistoryAttribute> { }