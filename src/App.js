import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Common/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';
import Jobs from './pages/Jobs';
import JOB from './pages/JOB';
import Dashboard from './pages/Dashboard';
import MyProfile from './components/Dashboard/MyProfile';
import CreateJob from './pages/CreateJob';
import { useSelector } from 'react-redux';
import JobPost from './components/Dashboard/JobPost';
import { ACCOUNT_TYPE } from './utils/constants';
import JobApplicants from './pages/JobApplicants';
import OpenRoute from './components/auth/OpenRoute';
import PrivateRoute from './components/auth/PrivateRoute';
import Error from './pages/Error';
import EditJob from './pages/EditJob';
import EditProfile from './components/EditProfile/Index';

function App() {

  const { user } = useSelector((state) => state.profile)

  return (
    <div>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />}></Route>

        <Route path='/verify-email' element={
          <OpenRoute>
            <VerifyEmail />
          </OpenRoute>
        } />

        <Route path='login' element={
          <OpenRoute>
            <Login />
          </OpenRoute>} />

        <Route path='signup' element={
          <OpenRoute>
            <Signup />
          </OpenRoute>} />

        <Route path='/jobs' element={
          <PrivateRoute>
            <Jobs />
          </PrivateRoute>
        } />

        <Route path='/jobs/:jobId' element={
          <PrivateRoute>
            <JOB />
          </PrivateRoute>
        } />

        <Route element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />

        <Route path='dashboard/my-profile' element={
          <MyProfile />
        } />

        <Route path="/create-job" element={
          <PrivateRoute>
            <CreateJob text={"Create Job"}/>
          </PrivateRoute>
        } />

        {
          user?.AccountType === ACCOUNT_TYPE.EMPLOYER && (
            <>
              <Route path='/myjobs' element={
                <PrivateRoute>
                  <JobPost />
                </PrivateRoute>
              } />


              <Route path='/myjobs/:id' element={
                <PrivateRoute>
                  <JobApplicants />
                </PrivateRoute>
              } />

              <Route path='/myjobs/editjob/:jobId'
              element={<EditJob/>}/>
            </>
          )
        }


        <Route
          path='*'
          element={
            <Error />
          } />

          <Route
          path='/dashboard/edit-profile'
          element={<EditProfile/>}/>

      </Routes>
    </div>
  );
}

export default App;
