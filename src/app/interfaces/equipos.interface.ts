export interface Equipo {
  _id: ID;
  team_name: string;
  formal_name: string;
  location_city: string;
  year_foundation: string;
  shield_image: string;
  actually_squad_image: string;
  first_wear_image: string;
  second_wear_image: string;
  league: League;
  stadium: Stadium;
  slug: string;
  technical_staff: TechnicalStaff[];
  players: Player[];
}

interface ID {
  $oid: string;
}

interface League {
  identify: string;
  name: string;
}

interface Stadium {
  name: string;
  capacity: string;
  address: string;
  image: string;
}

interface TechnicalStaff {
  name: string;
  appointment: string;
  image: string;
}

export interface Player {
  name: string;
  slug: string;
  birthday: string;
  position: string;
  position_abbreviate: string;
  nationality: string;
  dorsal: string;
  club: string;
  image: string;
  _id: ID;
}
