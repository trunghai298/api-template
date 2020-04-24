import { MySQLClient } from '../../src/clients/mysql';

const getWhoscoredData = async () => {
    const pergame = await MySQLClient.query(`
    SELECT * from players_transfermarkt WHERE playerId = 8198`,
        { type: MySQLClient.QueryTypes.SELECT });
    console.log(pergame)
    return pergame;
}
(async () => {
    await getWhoscoredData();
})();