import { Header } from 'components';

const Dashboard = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    imageUrl: '/assets/images/david.webp',
  };
  return (
    <main className='dashboard wrapper'>
      <Header
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description='Track activity, trends and popular destinations in real time'
      />

      <div>Dashboard Content</div>
    </main>
  );
};

export default Dashboard;
