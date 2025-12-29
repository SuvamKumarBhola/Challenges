import Tabs from './Tabs';

const ProfileSection = () => {
    const profileTabsData = [
        {
            label: "Posts",
            content: (
                <div className="profile-content">
                    <h3>Recent Posts by User</h3>
                    <ul style={{ paddingLeft: '20px' }}>
                        <li>Looking forward to the weekend!</li>
                        <li>Just pushed some clean code to production.</li>
                        <li>Why I love React hooks.</li>
                    </ul>
                </div>
            )
        },
        {
            label: "Bio",
            content: (
                <div className="profile-content">
                    <h3>About Me</h3>
                    <p>
                        Frontend developer passionate about building scalable user interfaces.
                        Based in Bhubaneswar.
                    </p>
                    <p><strong>Skills:</strong> React, JavaScript, CSS</p>
                </div>
            )
        },
        {
            label: "Friends",
            content: (
                <div className="profile-content">
                    <h3>Friend List (24)</h3>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={avatarStyle}>A</div>
                        <div style={avatarStyle}>B</div>
                        <div style={avatarStyle}>C</div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="profile-section-wrapper" style={{ marginTop: '30px' }}>
            <h2>Your Profile</h2>
            <Tabs items={profileTabsData} storageKey="profile_section_tab_pref" />
        </section>
    );
};

const avatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white'
};

export default ProfileSection;