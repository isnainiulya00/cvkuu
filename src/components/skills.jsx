import data from "../data/dataMahasiswa.json";

export default function Skills(){
    return(
        <section className="skills-section">
            <h2>Skills</h2>

            <div className="skills-list">
                {data.skills.map((skill)=>(
                <div key={skill.id} className="skill-card">
                    <img src={skill.icon_url} alt={skill.name} className="skill-icon"/>

                    <h3>{skill.name}</h3>

                    <p>Level: {skill.level}</p>
                    <p>Kategori: {skill.category}</p>

                    {skill.years_of_experience &&(
                        <p>{skill.years_of_experience} tahun pengalaman</p>
                    )}

                    {skill.is_main && <span className="badge-main">Main skill</span>}
                </div>
                ))}
            </div>
        </section>
    );

}