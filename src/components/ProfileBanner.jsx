const ProfileBanner = () => {
  return (
    <header className="profile-banner flex-between sm-flex-none">
      <div className="profile-badge">
        <img src="/images/icons/premium.svg" alt="Premium Icon" />
      </div>
      <div>
        <h1 className="heading-primary">Premium Account</h1>
        <p className="body-text">
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </p>
      </div>
    </header>
  );
};

export default ProfileBanner;
