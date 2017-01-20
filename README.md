# galaxy-maintenance

A package for Meteor that will set up an API endpoint to accept Galaxy status/maintenance updates.

## Installation & Setup

Install the package:

    $ meteor add ffxsam:galaxy-maintenance

Go to the [Galaxy status page](http://status.meteor.com) and click the "Subscribe to Updates" button. Click the `<>` symbol (webhooks), and enter your app's base URL, followed by `/api/galaxyStatus`, e.g.:

    https://app.mymeteorapp.com/api/galaxyStatus

Once complete, status updates will hit the API endpoint and data will be stored in the `galaxyIncidents` Mongo collection.

## Usage

To reference the maintenance data, you'll need to subscribe to the appropriate publication and fetch the data. Below is an example of a Meteor/React container that would serve up status information to a child component:

```js
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { GalaxyIncidents } from 'meteor/ffxsam:galaxy-maintenance';
import MyComponent from './MyComponent';

export default createContainer(() => {
  Meteor.subscribe('galaxyIncidents');

  return {
    incidents: GalaxyIncidents.find().fetch(),
  }
}, MyComponent)
```

A typical document in `galaxyIncidents` might look like this:

```json
{
  "_id" : "9kR7rqwuc8sXAHTRw",
  "impact" : "maintenance",
  "incidentId" : "n032xwhnw4nl",
  "scheduledFor" : ISODate("2016-10-17T21:30:00.000-0700"),
  "scheduledUntil" : ISODate("2016-10-18T00:30:00.000-0700"),
  "status" : "in_progress",
  "updatedAt" : ISODate("2016-10-17T21:31:04.976-0700")
}
```

When Galaxy (StatusPage, actually) sends out an update with a status of `"completed"`, the incident in question will automatically be removed from the collection.

## Caveats

This seems to not work when added to a project that uses `meteorhacks:picker`. This might also apply to other REST API packages. When in doubt, use Meteor's built-in `webapp` package which plays nicely with this one.

## Contributing

Please feel free to contribute and improve this package!
