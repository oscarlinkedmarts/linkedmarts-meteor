import { Mongo } from 'meteor/mongo';

Categories = new Mongo.Collection('categories');

export const categories_db = Categories;
