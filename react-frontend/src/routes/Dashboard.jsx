import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const { pathname } = useLocation();
  const isGuardDashboard = "/guard-dashboard" == pathname;
  return (
    <main>
      <h1 align="center">Dashboard</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile No.</th>
              {isGuardDashboard ? (
                <th scope="col">Gaurd Level </th>
              ) : (
                <th scope="col">Designation </th>
              )}
              <th>Image</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>index</th>
              {isGuardDashboard ? <td>Guard Name</td> : <td>Employee Name</td>}
              <td>email</td>
              <td>mobile</td>
              {isGuardDashboard ? <td>Level</td> : <td>Desg</td>}
              <td>
                <img src="/media/{{i.img}}" alt="" width="100" loading="lazy" />
              </td>
              <td>
                <a href="">Edit</a>
              </td>
              <td>
                <a href="/delete/{{i.name_slug}}">Delete</a>
              </td>
            </tr>
            <tr>
              <td colspan="7">
                <h2 align="center">No Data Found</h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};
export default Dashboard;
