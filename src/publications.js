import { Meteor } from 'meteor/meteor';
import { GalaxyIncidents } from './collection';

Meteor.publish('galaxyIncidents', function () {
  return GalaxyIncidents.find();
});
