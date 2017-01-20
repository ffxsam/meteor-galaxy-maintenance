import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { GalaxyIncidents } from './collection';

WebApp.connectHandlers.use('/api/galaxyStatus', function (req, res, next) {
  req.on('data', Meteor.bindEnvironment(chunk => {
    const data = JSON.parse(chunk);

    const {
      incident: {
        id,
        impact,
        scheduled_for,
        scheduled_until,
        status,
        updated_at,
      },
    } = data;
    const scheduledFor = new Date(scheduled_for);
    const scheduledUntil = new Date(scheduled_until);
    const updatedAt = new Date(updated_at);

    if (status !== 'completed') {
      GalaxyIncidents.upsert({ incidentId: id }, {
        impact,
        incidentId: id,
        scheduledFor,
        scheduledUntil,
        status,
        updatedAt,
      });
    } else {
      GalaxyIncidents.remove({ incidentId: id });
    }
  }));

  res.writeHead(200);
  res.end('OK');
});
