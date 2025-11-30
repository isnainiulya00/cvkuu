import data from '../data/dataMahasiswa.json';

export default function Profile(){
    const profile=data.profile;

    return(
        <section className="profile-section">
            <img
             src={profile.photo_url}
             alt={profile.full_name}
             className="profile-photo"
             />
             
             <h1 className="profile-name">{profile.full_name}</h1>
             <p className="profile-headline">{profile.headline}</p>
        
        <div className="profile-grid">
            <div className="profile-item">
                <span className="icon">🆔</span>
                <p><strong>NIM:</strong> {profile.nim}</p>
            </div>
            <div className="profile-item">
                <span className="icon">🎓</span>
                <p><strong>Program:</strong> {profile.prodi}</p>
            </div>
            <div className="profile-item">
                <span className="icon">📅</span>
                <p><strong>Batch:</strong> {profile.angkatan}</p>
            </div>
            <div className="profile-item">
                <span className="icon">📍</span>
                <p><strong>Location:</strong> {profile.location}</p>
            </div>
            <div className="profile-item">
                <span className="icon">👁️ </span>
                <p> {data.statistics.views_count}</p>
            </div>
            <div className="profile-item">
                <span className="icon">📊 </span>
                <p>{data.statistics.profile_complete_percent}%</p>
            </div>
        </div>
        </section>

    );

}