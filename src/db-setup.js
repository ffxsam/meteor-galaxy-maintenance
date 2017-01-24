import { Meteor } from 'meteor/meteor';
import { GalaxyIncidents } from './collection';

Meteor.startup(function () {
  GalaxyIncidents._ensureIndex({ status: 1 });
  GalaxyIncidents._ensureIndex({ incidentId: 1 });
  GalaxyIncidents._ensureIndex({ name: 1 });
});
