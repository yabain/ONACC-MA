import { UserType } from "../../enums";
import { YEntity } from "../yentity";

export class User extends YEntity
{
    email!: string;
    _id!: string;
    roles!: string;
    password!: string;
    nom!: string;
    prenom!: string;
    location!: string;
    city!: string;
    telephone!: string;
    photo!: string;
    region!: string;
    estAbonne!: string;
    estMembre!: string;
    fonction!: string;
    presention!: string;
    facebook!: string;
    twitter!: string;
    linkedin!: string;
    youtube!: string;
    googlePlus!: string;
    instagram!: string;
    flickr!: string;
    website!: string;
    equipes!: string;
    typeAbonne!: string;
}