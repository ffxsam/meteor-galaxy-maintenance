import { Meteor } from 'meteor/meteor';
import { GalaxyIncidents } from './collection';

Meteor.publish('galaxyIncidents', function ({ region }) {
  const selector = {};

  switch (region) {
    case 'US':
      selector.name = /^\[US\]/;
      break;
    case 'EU':
      selector.name = /^\[EU\]/;
      break;
    default:
      break;
  }

  return GalaxyIncidents.find(selector);
});
