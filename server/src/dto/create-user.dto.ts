export default class CreateUserDto {
  readonly user_id: number;
  readonly nom: string;
  readonly prenom: string;
  readonly email: string;
  readonly numero_identite: string;
  readonly password: string;
  readonly admin: boolean;
}
