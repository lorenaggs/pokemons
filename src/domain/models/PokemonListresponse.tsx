
export interface PokemonListResponse {
    count:      number;
    next?:      string;
    previous?:  string;
    results:    PokemonsData[];
}

export interface PokemonsData {
    name:   string;
    url:    string;
    id:     number;
    image:  string;
    icon:   string;
    showIcon: boolean;
}
