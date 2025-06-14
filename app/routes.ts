import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  route('sign-in', 'routes/root/sign-in.tsx'),
  route('api/create-trip', 'routes/api/create-trip.ts'),
  layout('routes/admin/admin-layout.tsx', [
    route('dashboard', 'routes/admin/dashboard.tsx'),
    route('all-users', 'routes/admin/all-users.tsx'),
    route('trips', 'routes/admin/Trips.tsx'),
    route('trips/create', 'routes/admin/CreateTrip.tsx'),
    route('trips/:tripId', 'routes/admin/TripDetails.tsx'),
  ]),
] satisfies RouteConfig;
