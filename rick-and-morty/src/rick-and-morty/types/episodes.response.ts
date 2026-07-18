export interface EpisodeResponse {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}

export interface Episode {
  id: number;
  name: string;
}
