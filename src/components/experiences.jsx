import data from "../data/dataMahasiswa.json";

export default function Experiences() {
  return (
    <section className="experiences-section">
      <h2>Experiences</h2>

      {data.experiences.map((exp) => (
        <div key={exp.id} className="experience-card">
          
          {exp.image_url && (
            <img
              src={exp.image_url}
              alt={exp.title}
              className="experience-image"
            />
          )}

          <div>
            <h3>{exp.title}</h3>
            <p>{exp.description}</p>
            <p><strong>Organisasi: </strong> {exp.organization}</p>
            <p><strong>Tipe: </strong> {exp.experience_type}</p>

            <p>
              <strong>Tahun: </strong>{" "}
              {exp.start_date} →{" "}
              {exp.is_current ? "Sekarang" : exp.end_date}
            </p>

            {exp.technologies && (
              <p className="experience-tech">
                <strong>Tech:</strong> {exp.technologies.join(", ")}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}