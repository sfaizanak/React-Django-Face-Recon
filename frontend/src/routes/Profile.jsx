const Profile = () => {
  document.title = "Profile";
  return (
    <section class="center">
      <div class="details-1">
        <div class="recent-orders-1">
          <div class="container-1">
            <div class="container-2">
              <div class="padding pb-4">
                <div class="font-box">
                  <div class="top-box">
                    <p class="p-3 org-heading">collegeName</p>
                    <img src="/media/img" alt="image" />
                  </div>
                  <div class="bottom-box">
                    <p>User Id: username</p>
                    <p class="designation">Name: staffName</p>
                    {/* <p class="designation">Name: studentName</p> */}

                    <p class="designation">Email: email</p>
                    <p class="designation">Department : dept</p>
                    {/* <p class="designation">Designation : desg</p> */}
                    <p class="designation">Year : year</p>

                    <p class="designation">Phone No.: i.mobile</p>
                    <p class="designation">
                      Address: addr , city Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. A, est. Sed aperiam
                      necessitatibus architecto
                    </p>
                  </div>
                </div>
                <a
                  class="btn btn-primary btn-center-1"
                  href="/staff-login/scan-face/?collegeName=collegeName&data=username"
                >
                  Scan Face
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Profile;
