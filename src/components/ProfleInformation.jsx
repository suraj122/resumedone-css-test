const ProfleInformation = () => {
  return (
    <div className="profile-info">
      <form className="">
        <legend className="heading-primary">Personal Information</legend>
        <div className="flex-between md-flex-col">
          <div className="profile-update-field">
            <fieldset className="grid">
              <div className="field-group">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" placeholder="Peter" />
              </div>

              <div className="field-group">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" placeholder="Cetera" />
              </div>
              <div className="field-group">
                <label htmlFor="city">City</label>
                <input id="city" type="text" placeholder="London" />
              </div>
              <div className="field-group">
                <label htmlFor="postalCode">Postal Code</label>
                <input id="postalCode" type="text" placeholder="E2 4XF" />
              </div>
              <div className="field-group span-2">
                <label htmlFor="address">Address</label>
                <input id="address" type="text" placeholder="123 Example" />
              </div>
              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={"petter@gmail.com"}
                  onChange={() => {}}
                />
                <img
                  className="checked-icon"
                  src="/images/icons/checked.svg"
                  alt="Checked Icon"
                />
              </div>
              <div className="field-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" placeholder="+442223334444" />
              </div>
              <div className="field-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Password" />
              </div>
            </fieldset>
            <p className="action-notification">
              Use this email to log in to your{" "}
              <a href="https://resumedone.io">resumedone.io</a> account and
              receive notifications.
            </p>
            <button className="btn-primary">Save</button>
            <div className="flex-start action-to-employer">
              <input id="checkbox" type="checkbox" />
              <label htmlFor="checkbox">
                Show my profile to serious employers on{" "}
                <a href="https://hirethesbest.io">hirethesbest.io</a> for free
              </label>
            </div>
          </div>
          <img
            className="user-avatar"
            src="/images/user-avatar.png"
            alt="User"
          />
        </div>
      </form>

      <div className="action-delete-box">
        <h2>Delete Account</h2>
        <p>
          If you delete your account you’ll be permanently removing it from our
          systems - you can’t undo it.
        </p>
        <button>Yes, Delete my account</button>
      </div>
      <div className="support-message">
        <p>
          <a href="https://resumedone.io">Get in touch with our support team</a>{" "}
          if you have any question or want to leave some feedback. <br /> We’ll
          be happy to hear from you.
        </p>
      </div>
    </div>
  );
};

export default ProfleInformation;
