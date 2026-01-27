import styles from '../styles/Pages.module.css'

type TeamMember = {
  id: string
  name: string
  role: string
  image: string
}

export default function EquipoCard({ member }: { member: TeamMember }) {
  return (
    <article className={styles.teamMember}>
      <div className={styles.teamPhoto}>
        <img
          src={member.image}
          alt={member.name}
          className={styles.teamPhotoImage}
        />
      </div>
      <h3 className={styles.teamName}>{member.name}</h3>
      <p className={styles.teamRole}>{member.role}</p>
    </article>
  )
}
