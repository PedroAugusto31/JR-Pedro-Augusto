interface GameCoverInfo {
  background_image: string;
  redirect?: boolean;
  slug?: string;
}

export async function validateGameCover(gameSlug: string) {
  const request = await fetch(
    `https://api.rawg.io/api/games/${gameSlug.replace(/ /g, '-').toLowerCase()}?key=${process.env.API_KEY}`,
    {
      method: 'GET',
    },
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: GameCoverInfo = await request.json();

  if (data.redirect && data.slug) {
    return await validateGameCover(data.slug);
  } else if (data.background_image) {
    return data.background_image;
  }
  return '';
}
