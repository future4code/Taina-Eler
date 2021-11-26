// Endpoint 1 - Criar usuário
const createUser = async (
    id: string,
    title: string,
    synopsis: string,
    releaseDate: Date,
    playingLimitDate: Date
  ) => {
    await connection
      .insert({
        id: id,
        title: title,
        synopsis: synopsis,
        releas_date: releaseDate,
        playing_limit_date: playingLimitDate,
      })
      .into("User");
  };