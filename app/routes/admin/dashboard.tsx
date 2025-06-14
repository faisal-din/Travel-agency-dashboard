import { Header, StatsCard, TripCard } from 'components';
import { redirect, useLoaderData } from 'react-router';
import { account } from '~/appwrite/client';
import { allTrips, dashboardStats, user } from '~/constants';
import type { Route } from './+types/admin-layout';

const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } =
  dashboardStats;

export const clientLoader = async () => await account.get();

const Dashboard = ({ loaderData }: Route.ComponentProps) => {
  const user = loaderData as User | null;

  return (
    <main className='dashboard wrapper'>
      <Header
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description='Track activity, trends and popular destinations in real time'
      />

      <section className='flex flex-col gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
          <StatsCard
            headerTitle='Total Users'
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />

          <StatsCard
            headerTitle='Total Trips'
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
          />

          <StatsCard
            headerTitle='Active Users'
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>

      <section className='container'>
        <h1 className='text-xl font-semibold text-dark-100'>Created Trips</h1>
        <div className='trip-grid'>
          {allTrips.slice(0, 4).map((trip) => (
            <TripCard
              key={trip.id}
              id={trip.id.toString()}
              name={trip.name!}
              imageUrl={trip.imageUrls[0]}
              location={trip.itinerary?.[0]?.location ?? ''}
              tags={trip.tags!}
              travelStyle={trip.travelStyle!}
              price={trip.estimatedPrice!}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
